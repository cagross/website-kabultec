<?php

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

// This locks down my entire site to non-registered users.  This particular code works for any dev site that is located on a sub-folder named 'dev.'
// if (preg_match('/\/dev\//', ABSPATH)) {
	add_action( 'template_redirect', 'redirect_func' );
// }
function redirect_func() {
	if( ! is_user_logged_in() && !( $GLOBALS['pagenow'] === 'wp-login.php') ) { if ( ! is_public_page_post() ) { auth_redirect(); } }
}
// This opens up a page/post of my choice to the public.  Mark page with a custom field of "show" and a value of 1.
function is_public_page_post() {
	if ( ! ( is_single() || is_page () ) ) : return false; endif;// If you want to open up the blog page, comment out this line.
	$id = get_the_ID();
	$hide = get_post_meta ($id, 'show', true);
	if ( $hide == 1 ): return true; endif;
	return false;
}

// This function displays the name of the template used at the bottom of the page.
function show_template() {
    if( is_super_admin() ){
        global $template;
        print_r($template);
    }
}
add_action('wp_footer', 'show_template');

// add_filter( 'spacious_footer_copyright' );
function spacious_footer_copyright() {
	echo 'Copyright &copy; ';
	echo date('Y');
	echo ' &middot; <a href="http://kabultec.org" title="Visit the web site">Kabultec</a>';
	echo '';
}

/* This ensures posts of category 'Events' (id=26) and category 'Newsletter' (id=83) do not appear on the Blog page.*/
function exclude_category($query) {
if ( $query->is_home() ) {
  $query->set('cat', '-26,-83');
}
  return $query;
}
add_filter('pre_get_posts', 'exclude_category');


/****************************************************************************************/

if ( ! function_exists( 'spacious_render_header_image' ) ) :
/**
 * Shows the small info text on top header part
 */
function spacious_render_header_image() {
	$header_image = get_header_image();
	$url = site_url();
	if( !empty( $header_image ) ) {
	?>
		<a href="<?php echo $url; ?>/"><img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
	<?php
	}
}
    endif;
/****************************************************************************************/

// add_action('wp_footer', 'add_googleanalytics');
function add_googleanalytics() {
?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90010913-1', 'auto');
  ga('send', 'pageview');

</script>
<?php }

// This function adds the post date to the top of each post.
function post_date_top() {
  if (is_single()) {
    ?>
    <div id="primary" class="post-date-top">
    <?php
    if (is_single()) {
      echo "<i>Posted on  ";
      echo get_the_date() . "</i><br><br>";
    }
    ?></div><?php
  }
}
add_action('spacious_before_body_content', 'post_date_top');

// This function changes the size of the featured images on the blog page to 500 px in height.
function remove_then_add_image_sizes() {
  remove_image_size( 'featured-blog-large' );
  add_image_size( 'featured-blog-large', 750, 500, true );
}
add_action( 'init', 'remove_then_add_image_sizes', 12 );

// This function enqueues the JS file that formats the home page slider and the JS file that adds links to widget titles.
function kt_enqueue_script() {

	//Enqueue the JS file to add links to widget titles, and pass to the JS file the base URL of the site (e.g. live site or dev site).
	wp_enqueue_script( 'my-js', '/wp-content/themes/spacious-child/assets/js/script-post-titles.js', array(), NULL, TRUE);
	//Ensure that the URL of the site in-question (e.g. live site URL or dev site URL) is passed to JavaScript.
	wp_localize_script(
		'my-js',
		'kt_script_vars',
		array(
			'site_url' => get_site_url()
		)
	);
}
add_action( 'wp_enqueue_scripts', 'kt_enqueue_script' );

/* This code ensures WP does not auto-insert <p> and <br> into code on News & Press page (id=232) or Donate page (id=69).*/
add_action('wp', 'no_p');
function no_p() {
  // if (is_page(232) || is_page(69)) {
  if (is_page('news-and-press') || is_page('donate')) {
    remove_filter( 'the_content', 'wpautop' );
    remove_filter( 'the_excerpt', 'wpautop' );
  }
}

/* This function replaces the parent theme function of the same name, which adds the slider to the home page.  The change in this function is that the correct alt text is added to each <img> tag, as well as ensure slides from guest authors have italicized titles.. */
function spacious_featured_image_slider() {
	
	global $post;
	?>
	<section id="featured-slider">
		<div class="slider-cycle">
			<?php
			for( $i = 1; $i <= 5; $i++ ) {

				$spacious_slider_title       = spacious_options( 'spacious_slider_title' . $i, '' );
				$spacious_slider_text        = spacious_options( 'spacious_slider_text' . $i, '' );
				$spacious_slider_image       = spacious_options( 'spacious_slider_image' . $i, '' );
				$spacious_slider_button_text = spacious_options( 'spacious_slider_button_text' . $i, __( 'Read more', 'spacious' ) );
				$spacious_slider_link        = spacious_options( 'spacious_slider_link' . $i, '#' );
				$attachment_post_id          = attachment_url_to_postid( $spacious_slider_image );
				$image_attributes            = wp_get_attachment_image_src( $attachment_post_id, 'full');

				$spacious_themename 		=	"kt_spacious";
				$kt_is_guest_author			=	get_theme_mod($spacious_themename . "_slider_title_s_" . $i, '');

				if( !empty( $spacious_header_title ) || !empty( $spacious_slider_text ) || !empty( $spacious_slider_image ) ) {
					if ( $i == 1 ) { $classes = "slides displayblock"; } else { $classes = "slides displaynone"; }
					?>
					<div class="<?php echo $classes; ?>">
						<figure>
						<?php
							$imgAlt = get_post_meta($attachment_post_id,'_wp_attachment_image_alt', true);// Get alt text of slider image.
						?>
							<img width="<?php echo esc_attr($image_attributes[1]); ?>" height="<?php echo esc_attr($image_attributes[2]); ?>" alt="<?php echo esc_attr( $imgAlt); ?>" src="<?php echo esc_url( $spacious_slider_image ); ?>">
						</figure>
						<div class="entry-container">
							<?php if( !empty( $spacious_slider_title ) || !empty( $spacious_slider_text ) ) { ?>
							<div class="entry-description-container">
								<?php if( !empty( $spacious_slider_title ) ) { ?>
								<div class="slider-title-head">
									<h3 class="entry-title">
										<a href="<?php echo esc_url( $spacious_slider_link ); ?>" title="<?php echo esc_attr( $spacious_slider_title ); ?>">
											<span <?php echo ($kt_is_guest_author)?"class=kt_ga":'';?>>
												<?php
													echo esc_html( $spacious_slider_title ); 
												?>
											</span>
										</a>
									</h3>
								</div>

								<?php
								}
								if( !empty( $spacious_slider_text ) ) {
									?>
								<div class="entry-content"><p><?php echo esc_textarea( $spacious_slider_text ); ?></p></div>
								<?php
								}
								?>
							</div>
							<?php } ?>
							<div class="clearfix"></div>
							<?php if( !empty( $spacious_slider_button_text ) ) { ?>
							<a class="slider-read-more-button" href="<?php echo esc_url( $spacious_slider_link ); ?>" title="<?php echo esc_attr( $spacious_slider_title ); ?>"><?php echo esc_html( $spacious_slider_button_text ); ?></a>
							<?php } ?>
						</div>
					</div>
					<?php
				}
			}
			?> <nav id="controllers" class="clearfix"></nav>
		</div>
	</section>
	<?php
}

/* Function to add a checkbox to each slide in Appearance-->Customize-->Slider.  Checking the box indicates that the slide features a blog post from a guest author.  This meta data is then used in spacious_featured_image_slider() to ensure the title is italicized. */
function themename_customize_register($wp_customize){
	$spacious_themename = "kt_spacious";
		for ( $i = 1; $i <= 5; $i++ ) {
	$wp_customize->add_setting($spacious_themename . "_slider_title_s_" . $i, array(
        'capability'     => 'edit_theme_options',
        'type'           => 'theme_mod',
        ));
        $wp_customize->add_control($spacious_themename . "_slider_title_control_" . $i, array(
            'label'     =>	__('Slide features blog post from guest author', 'themename'),
            'section'   => 	'spacious_slider_number_section' . $i,
			'settings'	=>	$spacious_themename . "_slider_title_s_" . $i,
			'type'		=>	'checkbox',
			'priority'	=>	'5',
		));
	}
}
// add_action('customize_register', 'themename_customize_register');

// Defer Javascripts
if (!(is_admin() )) {
    function defer_parsing_of_js ( $url ) {
        if ( FALSE === strpos( $url, '.js' ) ) return $url;
				if ( strpos( $url, 'jquery.js' ) ) return $url;//Do not defer jquery.js
				if ( strpos( $url, 'google.com/recaptcha/api.js' ) ) return $url;//Do not defer Google reCAPTCHA code.  If you defer this, then it will not be properly applied on any page with a contact form.
        return "$url' defer onload='";
    }
    add_filter( 'clean_url', 'defer_parsing_of_js', 11, 1 );
}

//Code to ensure Contact Form 7 JS and CSS files are loaded only on Contact page.
add_filter( 'wpcf7_load_js', '__return_false' );
add_filter( 'wpcf7_load_css', '__return_false' );
function enqueue_cf7_js_css() {
	wp_dequeue_script( 'google-recaptcha' );
	global $post;
    if ( isset( $post->post_content ) AND has_shortcode( $post->post_content, 'contact-form-7' ) ) {
		if ( function_exists( 'wpcf7_enqueue_scripts' ) ) {
			wpcf7_enqueue_scripts();
            wp_enqueue_script( 'google-recaptcha' );
		}
		if ( function_exists( 'wpcf7_enqueue_styles' ) ) {
			wpcf7_enqueue_styles();
		}
	}
}
add_action( 'wp_enqueue_scripts', 'enqueue_cf7_js_css' );

/**
 * Disable the emoji's
 */
function disable_emojis() {
 remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
 remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
 remove_action( 'wp_print_styles', 'print_emoji_styles' );
 remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
 remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
 remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
 remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
 add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
 add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 * 
 * @param array $plugins 
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
 if ( is_array( $plugins ) ) {
 return array_diff( $plugins, array( 'wpemoji' ) );
 } else {
 return array();
 }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
		/** This filter is documented in wp-includes/formatting.php */
		$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
		$urls = array_diff( $urls, array( $emoji_svg_url ) );
	}
	return $urls;
}

/* Dequeue stylesheets for several plugins--stylesheets that are unnecessary.*/
function bodhi_dequeue_svgs_css() {
	wp_dequeue_style( 'bodhi-svgs-attachment' );// Stylesheet for the SVG Support plugin.  This is not necessary if I am simply loading SVG files as images (as I am doing on the site)
	if (is_front_page()) {
		wp_dequeue_style( 'magic-liquidizer-table-style' );// Stylesheet for the Magic Liquidizer plugin.  This plugin is not in-use on the home page.
		wp_dequeue_style( 'spacious-font-awesome' );// Stylesheet for Font Awesome, loaded by the theme. This plugin is not in-use on the home page.
		wp_dequeue_style( 'msl-main' );// Stylesheet for the Master Slider plugin.  This plugin is not in-use on the home page.
		wp_dequeue_style( 'msl-custom' );// Stylesheet for the Master Slider plugin.  This plugin is not in-use on the home page.
		wp_dequeue_style( 'widgetopts-styles' );// Stylesheet for the Widget Options plugin.  This plugin is not in-use on the home page.
		wp_dequeue_style( 'tablepress-default' );// Stylesheet for the Tablepress plugin.  This plugin is not in-use on the home page.
	}
}
add_action( 'wp_print_styles', 'bodhi_dequeue_svgs_css', 100 );

/* Begin code to ensure blog post titles from guest authors are formatted correctly.*/

//Function to add a meta box to the back-end 'edit post' screens.
function kt_add_meta_box() {
    add_meta_box(
        'kt-aut-name',// ID of the new meta box.
        'Guest Contributor Name',// Title of the new meta box.
        'kt_add_mb_callback',// Callback function to run after add_meta_box() runs.
        '',
		'side',// Location of new meta box.
		'high'
    );
}
add_action( 'add_meta_boxes', 'kt_add_meta_box' );

// Callback function attached to add_meta_box(), which inserts a text '<input>' field into the meta box.
function kt_add_mb_callback( $post ) {
    // THE NONCE FIELD IS USED TO CHECK THAT THIS FIELD WAS SUBMITTED PROPERLY
    // INCLUDE ONE PER METABOX, REGARDLESS OF NUMBER OF FIELDS
    wp_nonce_field( 'kt_mb_nonce', 'metabox_nonce_field' );

	$kt_aut_val = get_post_meta( $post->ID, 'kt_gauth_name', true );
    ?>
        <input type="text" name="kt_gauth_name" value=<? echo "'" . $kt_aut_val . "'";?> placeholder="(author of post)">
    <?php
}

/* Ensure the new meta box is displayed  directly under the 'tags' meta box. */
function kt_reorder_mb( $order ) {
    return array(
		'normal'   => '',
        'side'     => join( ",", array(
			'submitdiv',
			'categorydiv',
			'kt-aut-name',
			'tagsdiv-post_tag'
		) ),
        'advanced' => '',
    );
}
add_filter( 'get_user_option_meta-box-order_post', 'kt_reorder_mb' );

/* When the 'edit post' screen is first loaded, check if 'guest contributor' tag is present.  If so, show the new meta box. */
function kt_add_metabox_classes($classes) {
	global $post;
	if ( get_post_type( get_the_ID() ) == 'post' ) {

		$post_tags = get_the_tags($post->ID);

		if (!empty($post_tags)) {
			foreach ($post_tags as $tag) {
				if ($tag->slug == "guest-contributor") {
					array_push($classes,'kt-show-mb');
					break;
				}
			}
		}
    	return $classes;
	}
}
add_filter('postbox_classes_post_kt-aut-name','kt_add_metabox_classes');

// Ensure the data entered in the new meta box is saved to the database appropriately.
function save_test_metabox( $post_id ) {
    // BEGIN NECESSARY SECURITY CHECKS FOR PROCESSING METAFIELDS
	// error_log(print_r("testy",true));
	// error_log(print_r($_POST,true));
	$nonce = ( !empty( $_POST['metabox_nonce_field'] ) ) ? $_POST['metabox_nonce_field'] : '';
    if( !$nonce || !wp_verify_nonce( $nonce, 'kt_mb_nonce' )  ) {
        return;
    }
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }
    // Check the user's permissions.
    if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {
        if ( ! current_user_can( 'edit_page', $post_id ) ) {
            return;
        }
    } else {
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
    }
    // END SECURITY CHECKS
    // START PROCESSING FIELDS
	$kt_aut_val = ( !empty( $_POST['kt_gauth_name'] ) ) ? $_POST['kt_gauth_name'] : '';
	update_post_meta( $post_id, 'kt_gauth_name', $kt_aut_val );
}
add_action( 'save_post', 'save_test_metabox' );

/* Function to ensure blog posts from guest authors are formatted properly, i.e. italicized titles, with non-italicized author names.*/
function kt_guest_post_title( $title, $id = null ) {
	if (get_post_type($id) == "post") {
		$tags = get_the_tags($id);
		$kt_gauth = get_post_meta( $id, 'kt_gauth_name', true );
		if (!empty($kt_gauth)) {
			return '<i>'.$title.'</i>' . ', by ' . $kt_gauth;
		}
	}
	return $title;
}
add_filter( 'the_title', 'kt_guest_post_title', 10, 2 );

/*Enqueue JS script and CSS file which modify fields on admin pages.*/
function kt_enqueue_admin_page($hook) {
	if ( 'post.php' != $hook ) {// Do nothing if the admin page in-question is not for post type = "post."
	    return;
	}
	wp_enqueue_script( 'kt-js-ad', get_stylesheet_directory_uri() . '/assets/js/script-kt-admin.js', array(), NULL, TRUE);
	wp_enqueue_style( 'admin_css', get_stylesheet_directory_uri() . '/style-admin.css');
}
add_action('admin_enqueue_scripts', 'kt_enqueue_admin_page');
/* End code to ensure blog post titles from guest authors are formatted correctly.*/

/* To pages that are part of a hierarchy, add an outline of pages to the bottom of page content. */
function kt_added_page_content ( $content ) {
    if ( is_page() ) {
		global $post;
		$kt_has_anc = get_post_ancestors( $post->ID );
		$args_kt_has_child = array(
			'child_of'	=> ($post->ID)
		);
		$kt_has_child = get_pages($args_kt_has_child);
		if ($kt_has_anc || $kt_has_child) {

			if ($kt_has_anc) {
				$parent = end($kt_has_anc);
			} else {
				$parent = $post->ID;
			}
			$content .= "
				<hr>
				<h4>
					Navigate This Section
				</h4>
				<ul class='kt-page-tree-nav'>
			";			

			$args   = array(
				'child_of'	=> $parent
			);
			$pages  = get_pages( $args );

			$pageids = array();
			foreach ( $pages as $page ) {
				$pageids[] = $page->ID;
			}
			
			$args = array(
				'title_li'	=> '',
				'echo'		=> false,
				'include'	=> $parent . ',' . implode( ",", $pageids ),
			);
			$content = $content . wp_list_pages( $args );
    	}
	}
	return $content;
}
add_filter( 'the_content', 'kt_added_page_content');


// This function enqueues the JS file for the donate page.
function kt_enqueue_script2() {
	wp_enqueue_script( 'testy-js', '/wp-content/themes/spacious-child/assets/js/script-donate.js', array(), NULL, TRUE);
}
add_action( 'wp_enqueue_scripts', 'kt_enqueue_script2' );

