/*
	Folio by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -20,
				offsetX: -2,
				mode: 'fade',
				speed: 300,
				noOpenerFade: true,
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Sliders.
			var $slider = $('#slider');
			if ($slider.length > 0) {

				 $slider.slidertron({
					mode: 'fade',
					seamlessWrap: false,
					viewerSelector: '.viewer',
					speed: 'slow',
					autoFit: true,
					autoFitAspectRatio: (936 / 484),
					reelSelector: '.viewer .reel',
					slidesSelector: '.viewer .reel .slide',
					advanceDelay: 5000,
					speed: 'slow',
					captionLines: 1,
					captionLineSelector: '.caption-line',
					slideCaptionSelector: '.caption',
					indicatorSelector: '.indicator ul li',
					slideLinkSelector: '.link'
				});

				$window.resize(function() {
					 $slider.trigger('slidertron_reFit');
				});

			}

		// Galleries.
			var $gallery = $('.gallery');
			if ($gallery.length > 0) {

				$gallery.poptrox({
					overlayClass: 'poptrox-overlay skel-layers-fixed',
					usePopupDefaultStyling: false,
					windowMargin: 20,
					popupLoaderText: '',
					popupCloserText: '',
					baseZIndex: 20000
				});

			}

	});

})(jQuery);