// texto da pesquisa

let pesquisado = []

// seletores importantes

const btnpesquisar = document.querySelector('#getserver')
const homeservers = document.getElementById('homeservers')
const apiresult = document.getElementById('apiresult')
let loading = document.getElementById('loading')

const resultado = document.getElementById('resultado');

// resultado pesquisa: deu certo

const br1 = document.createElement('br')
const br2 = document.createElement('br')
const br3 = document.createElement('br')
const br4 = document.createElement('br')
const br5 = document.createElement('br')
const br6 = document.createElement('br')
const br7 = document.createElement('br')
const br8 = document.createElement('br')
const br9 = document.createElement('br')

const box = document.createElement('div')
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const div5 = document.createElement('div')
const div6 = document.createElement('div')
const div7 = document.createElement('div')
const div8 = document.createElement('div')
const div9 = document.createElement('div')

const divmotd = document.createElement('div')

const h1 = document.createElement('h1')
const h12 = document.createElement('h1')
const h13 = document.createElement('h1')
const h14 = document.createElement('h1')
const h15 = document.createElement('h1')
const h16 = document.createElement('h1')
const h17 = document.createElement('h1')
const h18 = document.createElement('h1')
const h19 = document.createElement('h1')

const span1 = document.createElement('span')
const span2 = document.createElement('span')
const span3 = document.createElement('span')
const span4 = document.createElement('span')
const span5 = document.createElement('span')
const span6 = document.createElement('span')
const span8 = document.createElement('span')
const span9 = document.createElement('span')

const divimg = document.createElement('div')
const img = document.createElement('img')

// qtd de erros 404

let erros = 0;

// função principal

btnpesquisar.addEventListener('click', function search() {

  // dados da pesquisa

  let servidor = document.getElementById('searchserver')
  let nomedosv = servidor.value

  // se o número de vezes pesquisado por diferente do que 0 - não for a primeira vez
  // remova-o do array e adicione um novo.
 
  if (pesquisado.length !== 0) {

    if (servidor.value === "") {
      servidor.classList.add('is-danger')
      return;
    }

    pesquisado.pop(0)
    console.log('ja existe um.')

    pesquisado.push(1)
  } else {

    // URL da API
    let apiUrl = `https://api.mcstatus.io/v2/status/java/${nomedosv}`;

    // Fazendo uma solicitação GET usando jQuery
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
        },
        
        success: function (data) {

          apiresult.appendChild(box);

          box.classList.add('box')
          box.style.width = "95%"
          box.style.margin = "0 auto"
          box.appendChild(br1)
          box.appendChild(div1);
          box.appendChild(br1)
          box.appendChild(div2);
          box.appendChild(br2)
          box.appendChild(div3);
          box.appendChild(br3)
          box.appendChild(div4);
          box.appendChild(br4)
          box.appendChild(div5);
          box.appendChild(br5)
          box.appendChild(div6);
          box.appendChild(br6)
          box.appendChild(div7);
          box.appendChild(br7)
          box.appendChild(div8);
          box.appendChild(br8)
          box.appendChild(div9);
          box.appendChild(br9)
          div1.appendChild(h1);
          
          div2.appendChild(h12);
          
          div6.appendChild(h16);


          div3.appendChild(h13);

          div4.appendChild(h14);
          div4.appendChild(divmotd);

          div5.appendChild(h15);


          div7.appendChild(h17);

          div8.appendChild(h18);

          div9.appendChild(h19);

          // status
          h1.classList.add('title', 'is-6');
          // online
          h12.classList.add('title', 'is-6');
          // hostname
          h13.classList.add('title', 'is-6');
          // motd
          h14.classList.add('title', 'is-6');
          // ip
          h15.classList.add('title', 'is-6');
          // port
          h16.classList.add('title', 'is-6');
          // version
          h17.classList.add('title', 'is-6');
          // icon
          h18.classList.add('title', 'is-6');
          // outro aí
          h19.classList.add('title', 'is-6');

          span1.classList.add('subtitle', 'is-6');
          span2.classList.add('subtitle', 'is-6');
          span3.classList.add('subtitle', 'is-6');
          span4.classList.add('subtitle', 'is-6');
          span5.classList.add('subtitle', 'is-6');
          span6.classList.add('subtitle', 'is-6');
          span8.classList.add('subtitle', 'is-6');
          span9.classList.add('subtitle', 'is-7');
        
          div4.style.display = "flex"
          div4.style.flexDirection = "row"
          div4.style.alignItems = "center"
          div4.style.justifyContent = "space-between"

          h1.textContent = `Status: `;

          console.log(data.online)

          if (data.online == true) {
            span1.innerHTML = 'Online'
          } else {
            span1.innerHTML = 'Offline'
          }


          h12.textContent = `Online: `;
          span2.textContent = `${data.players.online} / ${data.players.max}`;

          h13.textContent = `Hostname: `;
          span3.textContent = data.host;

          h14.textContent = `Motd: `;
          // lá em cima

          divmotd.style.height = "100px";
          divmotd.style.width = "90%";
          divmotd.style.backgroundColor = "#000";
          divmotd.style.textAlign = "center";
          divmotd.innerHTML = data.motd.html;
          
          h15.textContent = `Ip: `
          span5.innerHTML = data.ip_address


          h16.textContent = `Port: `;
          span6.innerHTML = data.port

          h17.textContent = `Icon: `;
          h17.style.display = "flex"
          h17.style.justifyContent = "start"
          h17.style.alignItems = "center"

          const img = document.createElement('img')
          img.src = data.icon
          h17.appendChild(img)

          h18.textContent = `Version: `;
          h18.style.display = "flex"
          h18.style.flexDirection = "row"


          const div200 = document.createElement('div')
          div200.style.display = "flex"
          div200.style.flexDirection = "row"
          div200.style.alignItems = "center"
          div200.style.justifyContent = "space-between"

          const divversion = document.createElement('div')

          divversion.style.height = "100%";
          divversion.style.width = "100px";
          divversion.style.backgroundColor = "#000";
          divversion.style.textAlign = "center";
          divversion.innerHTML = data.version.name_html;
          
          h18.appendChild(div200)
          div200.appendChild(divversion)        

          h1.appendChild(span1);
          h12.appendChild(span2);
          h13.appendChild(span3);
          h15.appendChild(span5);
          h16.appendChild(span6);
          h18.appendChild(span8);
          h19.appendChild(span9);

          // homeservers.style.display = 'none'
        },

        
                
        error: function (error) {

          servidor.classList.add('is-danger')
          btnpesquisar.classList.add('is-danger')

          erros++

          if (erros > 1) {
            console.log(`excedeu o número de erros. Número de erros = ${erros}`)
            erros = 0;
            homeservers.style.display = 'block'
            return;
          }

          homeservers.style.display = 'none'

          var statusdiv = document.getElementById('status')

          var columns = document.createElement("div")
          var subtitle = document.createElement("div")

          columns.appendChild(subtitle)

          columns.classList.add('columns', 'is-vcentered')
          subtitle.classList.add('is-12')

          columns.style.display = 'flex'
          columns.style.flexDirection = 'column'
          columns.style.alignItems = 'center'

          subtitle.innerHTML = `Servidor não encontrado. <br> Digite o IP do servidor corretamente.`;

          statusdiv.appendChild(columns)


          setTimeout(
            
            function() {
              window.location.reload()
            }

            , 1500)
        },
      });

  }
})