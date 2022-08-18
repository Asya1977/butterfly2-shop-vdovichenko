$(document).ready(function() {

  let isOpen = false;

  $('.j-burger').on('click', function() {

    $('.j-menu').slideToggle();

  });
});

// Табы в контактах

    $('.j-tabs-link').on('click', function(event) {
        event.preventDefault();

        $('.j-tabs-link').removeClass('active');
        $(this).addClass('active');

        let index = $(this).index('.j-tabs-link');

        $('.j-contacts-item').removeClass('active');
        $('.j-contacts-item').eq(index).addClass('active');

    });
// фильтр в каталоге

$('.j-catalog-link').on('click', function(event) {
  event.preventDefault();

  $('.j-catalog-link').removeClass('active');
  $(this).addClass('active');

  let index = $(this).index('.j-catalog-link');

});

$('.j-catalog-link').on('click', function(event) {
  event.preventDefault();

  let filterData = $(this).data('filter');

  console.log(filterData);

  if (filterData === 'all') {
      $('.catalog-item').show();
      return;
  }

  $('.catalog-item').each(function() {

      let typeData = $(this).data('type');

      if (filterData === typeData) {
          $(this).show();
      } else {
          $(this).hide();
      }

  });
});
