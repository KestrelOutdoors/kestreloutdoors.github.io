(function(a){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"});a(function(){var i=a(window),g=a("body"),f=a("#page-wrapper"),c=a("#banner"),b=a("#header");g.addClass("is-loading");i.on("load",function(){window.setTimeout(function(){g.removeClass("is-loading")},100)});if(skel.vars.isMobile){g.addClass("is-mobile")}else{skel.on("-medium !medium",function(){g.removeClass("is-mobile")}).on("+medium",function(){g.addClass("is-mobile")})}a(".scrolly").scrolly({speed:1500,offset:b.outerHeight()});var d=a("#menu"),e=a('<a class="close">').appendTo(d),h=a(".menuToggle");d.appendTo(g);e.on("click touchend",function(j){j.preventDefault();j.stopPropagation();g.removeClass("is-menu-visible")});h.on("click touchend",function(j){j.preventDefault();j.stopPropagation();g.toggleClass("is-menu-visible")});f.on("click touchend",function(j){if(g.hasClass("is-menu-visible")){j.preventDefault();j.stopPropagation();g.removeClass("is-menu-visible")}});if(skel.vars.IEVersion<9){b.removeClass("alt")}if(c.length>0&&b.hasClass("alt")){i.on("resize",function(){i.trigger("scroll")});c.scrollex({bottom:b.outerHeight()+1,terminate:function(){b.removeClass("alt")},enter:function(){b.addClass("alt")},leave:function(){b.removeClass("alt")}})}})})(jQuery);
