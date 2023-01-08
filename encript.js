const inp = document.querySelector(".text_e");
const message = document.querySelector(".message");
const encrypt = document.querySelector(".encryption");
const p_encrypt = document.querySelector(".text_en");
const icon = document.querySelector(".icon");
const copy_b = document.querySelector(".copy")
const exp = /^[a-z\s]*$/;
function change(){ 
    const text = inp.value;
    const p_exist = !!document.querySelector(".encrypt_text");
    if(text.length===0){
        p_encrypt.style.display="flex";
        icon.style.display="flex";
        if(p_exist){
            document.querySelector(".encrypt_text").style.display="none";
        }
        return 0; 
    }
    const valid = exp.test(text);
    if(valid){
        if(message.innerHTML==="Texto con acentos o mayusculas"){
            message.innerHTML = "No ingresar acentos ni mayusculas"; 
            message.style.color ="black";
        }
        let repla = text.replace("e","enter");
        repla = repla.replace("i","imes");
        repla = repla.replace("a","ai");
        repla = repla.replace("o","ober");
        repla = repla.replace("u","ufat");
        if(p_exist){
            document.querySelector(".encrypt_text").remove();
        }
        const p = document.createElement("p")
        p.textContent = repla;
        p.className = "encrypt_text";
        p_encrypt.style.display="none";
        icon.style.display="none";
        encrypt.insertBefore(p,document.querySelector(".copy"));
        document.querySelector(".copy").addEventListener("click", copy);
    }else{
        message.innerHTML = "Texto con acentos o mayusculas"; 
        message.style.color ="red";
    }
}
function copy(){
    const t = document.querySelector(".encrypt_text").innerHTML;
    navigator.clipboard.writeText(t);
}
function change_2(){
    const text = inp.value;
    if(text.length===0){
        p_encrypt.style.display="flex";
        icon.style.display="flex";
        if(p_exist){
            document.querySelector(".encrypt_text").style.display="none";
        }
        return 0; 
    }
    const valid = exp.test(text);
    console.log(valid);
    if(valid){
        
        if(message.innerHTML==="Texto con acentos o mayusculas"){
            message.innerHTML = "No ingresar acentos ni mayusculas"; 
            message.style.color ="black";
        }
        let repla = text.replace("enter","e");
        repla = repla.replace("imes","i");
        repla = repla.replace("ai","a");
        repla = repla.replace("ober","o");
        repla = repla.replace("ufat","u");
        const p_exist = !!document.querySelector(".encrypt_text");
        console.log(p_exist);
        if(p_exist){
            document.querySelector(".encrypt_text").remove();
        }
        const p = document.createElement("p");
        p.textContent = repla;
        p.className = "encrypt_text";
        p_encrypt.style.display="none";
        icon.style.display="none";
        encrypt.insertBefore(p,document.querySelector(".copy"));
        document.querySelector(".copy").addEventListener("click", copy);
    }else{
        message.innerHTML = "Texto con acentos o mayusculas"; 
        message.style.color ="red";
    }
}
