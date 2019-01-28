/* QUE ES:
Es un objeto unicamente de drupal, tiene un sistema para proporcionar una forma modular y mejor de 
adjuntar la funcionalidad de JavaScript para colocar elementos en una página.
Los behaviors de Drupal le permiten anular o ampliar el comportamiento existente.

COMO SE UTILIZA:
los behaviors siguen siendo parte de JavaScript en el núcleo. Estos behaviors se ejecutarán en cada solicitud, incluidas las solicitudes AJAX.

EJEMPLO BASÍCO: */

  Drupal.behaviors.awesome = {
    attach: function(context, settings) {
      $('main', context).once('awesome').append('<p>Hello world</p>');
    }
  };

}(jQuery);

Drupal.behaviors.awesome(namespace) = {
  attach/* <--(contiene la función real que debe ejecutarse.) */: function (context/* <--(contendrá todo el documento y después de una solicitud AJAX tendrá todos los elementos recién cargados), settings(contiene información pasada a JavaScript a través de PHP,) */) {

    $('main', context', context).once('awesome')'/* <--(se asegurará que el código solo se ejecute una vez.) */.append('<p>Hello world</p>');
  }
};

}(jQuery));