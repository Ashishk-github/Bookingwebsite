const f=document.querySelector('#f');
      const sub=document.querySelector('#submit');
      const fname=document.querySelector('#fname');
      const time=document.querySelector('#time');
      const ph=document.querySelector('#ph');
      const mail=document.querySelector('#mail');
      const date=document.querySelector('#date');

      f.addEventListener('submit',onsub);
      function onsub(e){
        e.preventDefault();
        if (fname.value===''||ph.value===''||mail.value===''||date.value===''||time.value==='None'){
          alert('Please enter all the fields');
        }
        else{
          const l=document.createElement('l');
          l.appendChild(document.createTextNode(`${fname.value}
          ${mail.value}
          ${ph.value}
          ${date.value}
          ${time.value}`));
          console.log(l)
          alert('success');
          fname.value=''
          ph.value=''
          mail.value=''
          date.value=''
          time.value='None'

        }
      } ;