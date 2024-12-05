/* ---------------------------------------------
 Buttons and links animation helper
 --------------------------------------------- */

 function init_btn_animation(){
    (function($){    
    
        $("[data-btn-animate=y]").each(function(){
            var btn_animate_y = $(this);
            var btn_animate_y_cont = btn_animate_y.html();
            btn_animate_y.html('<span class="btn-animate-y"><span class="btn-animate-y-1">' + btn_animate_y_cont + '</span><span class="btn-animate-y-2" aria-hidden="true">' + btn_animate_y_cont + '</span></span>');
        });
        
        $("[data-btn-animate=ellipse]").each(function(){
            var btn_animate_ellipse = $(this);
            var btn_animate_ellipse_cont = btn_animate_ellipse.html();
            btn_animate_ellipse.html('<span class="btn-ellipse-inner"><span class="btn-ellipse-unhovered">' + btn_animate_ellipse_cont + '</span><span class="btn-ellipse-hovered" aria-hidden="true">' + btn_animate_ellipse_cont + '</span></span>');
        });
        
        $("[data-link-animate=y]").each(function(){
            var link_animate_y = $(this);
            var link_animate_y_cont = link_animate_y.html();
            link_animate_y.html('<span class="link-strong link-strong-unhovered">' + link_animate_y_cont + '</span><span class="link-strong link-strong-hovered" aria-hidden="true">' + link_animate_y_cont + '</span></span>');
        });
        
    })(jQuery);
}