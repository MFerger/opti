
var selectCallback = function(variant, selector) {
  if (variant && variant.available == true) {
    // selected a valid variant
    jQuery('#purchase').removeClass('disabled').removeAttr('disabled'); // remove unavailable class from add-to-cart button, and re-enable button
    jQuery('.price-field').html(Shopify.formatMoney(variant.price, "{{shop.money_with_currency_format}}"));  // update price field
  } else {
    // variant doesn't exist
    jQuery('#purchase').addClass('disabled').attr('disabled', 'disabled');      // set add-to-cart button to unavailable class and disable button
    var message = variant ? "Sold Out" : "Unavailable";
    jQuery('.price-field').text(message); // update price-field message
  }

};


// initialize multi selector for product
jQuery(document).ready(function() {
  new Shopify.OptionSelectors("product-select", { product: {{ product | json }}, onVariantSelected: selectCallback });
  $('#options label').addClass('selector-label');
  $('#options select').addClass('selector-option');
});

jQuery(document).ready(function (jQuery) {
  // delegate calls to data-toggle="lightbox"
  jQuery(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
    event.preventDefault();
    return jQuery(this).ekkoLightbox({
      onShown: function() {
        /*if (window.console) {
        return console.log('Checking our the events huh?');
      }*/
    },
    onNavigate: function(direction, itemIndex) {
      if (window.console) {
        return console.log('Navigating '+direction+'. Current item: '+itemIndex);
      }
    }
  });
});
});
