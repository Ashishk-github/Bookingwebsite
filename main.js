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
          localStorage.setItem('Name',fname.value)
          localStorage.setItem('mail',mail.value)
          localStorage.setItem('ph',ph.value)
          localStorage.setItem('date',date.value)
          localStorage.setItem('time',time.value)
          alert('success');
          fname.value=''
          ph.value=''
          mail.value=''
          date.value=''
          time.value='None'

        }
      } ;