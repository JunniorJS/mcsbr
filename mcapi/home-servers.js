// hypixel

// URL da API
    let apiUrl = 'https://api.mcstatus.io/v2/status/java/hypixel.net';

    // Fazendo uma solicitação GET usando jQuery
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
        },
        
        success: function (data) {
          $('.hypixelimg').attr('src', `${data.icon}`);
          $('.hypixelhost').text(`${data.host}`);
          $('.hypixelplayerson').text(`${data.ip_address} / ${data.host}`);
          $('.hypixelonline').text(`${data.players.online}/${data.players.max}`);
          $('.hypixelversion').text(`${data.version.name_clean}`);

          function onlineouoff () {
            if (data.online == true) {
              $('.hypixelstatus').text(`online`);
            } else {
              $('.hypixelstatus').text(`offline`);
            }
          }

          onlineouoff()
        },
        
        error: function (error) {
          // Lidando com erros
          console.error('Erro na solicitação:', error);
          
          $('#resultado').text(`${error.statusText}`);
          $('#resultado').text(`${error.responseJSON.errors[0].detail}`);
        }
      });


// hylex

  // URL da API
  apiUrl = 'https://api.mcstatus.io/v2/status/java/hylex.net';

  // Fazendo uma solicitação GET usando jQuery
  $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
      },
      
      success: function (data) {
        $('.hyleximg').attr('src', `${data.icon}`);
        $('.hylexhost').text(`${data.host}`);
        $('.hylexplayerson').text(`${data.ip_address} / ${data.host}`);
        $('.hylexonline').text(`${data.players.online}/${data.players.max}`);
        $('.hylexversion').text(`${data.version.name_clean}`);
        $('.hylexstatus').text(`${data.version.name_clean}`);

        function onlineouoff () {
          if (data.online == true) {
            $('.hylexstatus').text(`online`);
          } else {
            $('.hylexstatus').text(`offline`);
          }
        }

        onlineouoff()
      },
      
      error: function (error) {
        // Lidando com erros
        console.error('Erro na solicitação:', error);
        
        $('#resultado').text(`${error.statusText}`);
        $('#resultado').text(`${error.responseJSON.errors[0].detail}`);
      }
    });

// mush

  // URL da API
  apiUrl = 'https://api.mcstatus.io/v2/status/java/mush.com.br';

  // Fazendo uma solicitação GET usando jQuery
  $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
      },
      
      success: function (data) {
        $('.mushimg').attr('src', `${data.icon}`);
        $('.mushhost').text(`${data.host}`);
        $('.mushplayerson').text(`${data.ip_address} / ${data.host}`);
        $('.mushonline').text(`${data.players.online}/${data.players.max}`);
        $('.mushversion').text(`${data.version.name_clean}`);
        $('.mushstatus').text(`${data.version.name_clean}`);

        function onlineouoff () {
          if (data.online == true) {
            $('.mushstatus').text(`online`);
          } else {
            $('.mushstatus').text(`offline`);
          }
        }

        onlineouoff()
      },
      
      error: function (error) {
        // Lidando com erros
        console.error('Erro na solicitação:', error);
        
        $('#resultado').text(`${error.statusText}`);
        $('#resultado').text(`${error.responseJSON.errors[0].detail}`);
      }
    });