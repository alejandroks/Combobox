function MyCombobox(object){

    var wrapper=document.createElement('div');
    wrapper.className="ComboBox1";

    var listString=document.createElement('div')
    listString.className="listString";
    listString.innerHTML=object.value;

    var buttonSkroll = document.createElement('div');
    buttonSkroll.className="Skroling";
    buttonSkroll.innerHTML="X"

    var divOverFlow=document.createElement('div');
    divOverFlow.className='divOwer';
    buttonSkroll.onclick=function onClikButton(object1)
    {
        var listUL=document.createElement('ul');
        listUL.className="listul";

        var list=[];
        for(var i=0;i<object.dataSource.length;i++){
            list[i] = document.createElement('li');
            list[i].innerHTML=object.dataSource[i];
            listUL.appendChild(list[i]);
        }
        divOverFlow.appendChild(listUL)
        object.current.appendChild(divOverFlow);

    }
    wrapper.appendChild(listString);
    wrapper.appendChild(buttonSkroll);
    object.current.appendChild(wrapper);





}