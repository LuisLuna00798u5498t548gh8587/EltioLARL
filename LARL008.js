package mobileapplication1;


import javax.microedition.midlet.*;

import javax.microedition.lcdui.*;


public class pant1 extends MIDlet implements CommandListener{

Display pantalla=Display.getDisplay(this);

Form formulario1=new Form("Formulario 1");

Form formulario2=new Form("Formulario 2");

Form formulario3=new Form("Formulario 3");

Command f1=new Command("Ir formulario1",Command.ITEM,1);

Command f2=new Command("Ir formulario2",Command.ITEM,1);

Command f3=new Command("Ir formulario3",Command.ITEM,1);

Command salir=new Command("Salir",Command.EXIT,2);

Command regresar=new Command("Regresar",Command.ITEM,2);

String sa1,sa2;

TextField t1,t2,t3,t4;

Command suma=new Command("Calcular",Command.OK,1);

TextField n1,n2;

public pant1(){

    formulario1.addCommand(f2);

    formulario1.addCommand(f3);

    formulario1.addCommand(salir);

    formulario1.setCommandListener(this);

    

    formulario2.addCommand(f3);

    formulario2.addCommand(regresar);

    formulario2.setCommandListener(this);

    

    formulario3.addCommand(f1);

    formulario3.addCommand(regresar);

    formulario3.setCommandListener(this);

}

    public void startApp() {

 

        sa1="Hola profesor \n";

        formulario1.append(sa1);

        sa2="Bienvenido a mi trabajo \n";

        formulario1.append(sa2);

        pantalla.setCurrent(formulario1);

    }

    

    public void pauseApp() {

    }

    

    public void destroyApp(boolean unconditional) {

    }

public void commandAction(Command c, Displayable d){

    if(c==salir && d==formulario1){

        destroyApp(false);

        notifyDestroyed();

    }

    if(c==f2 && d==formulario1){

        t1=new TextField("Ingresa nombre ","",20,TextField.ANY);

        t2=new TextField("Ingresa telefono ","",20,TextField.NUMERIC);

        t3=new TextField("Ingresa te fecha de nacimiento ","",20,TextField.ANY);

        t4=new TextField("ingresa tu salario ","",20,TextField.ANY);

        formulario2.append(t1);

        formulario2.append(t2);

        formulario2.append(t3);

        formulario2.append(t4);

        pantalla.setCurrent(formulario2);

    }

    if(c==f3 && d==formulario1){

        n1=new TextField("Ingresa el primer nuemro ","", 10,TextField.NUMERIC);

        n2=new TextField("Ingresa el segundo numero","",10,TextField.NUMERIC);

        formulario3.append(n1);

        formulario3.append(n2);

        formulario3.addCommand(suma);

        pantalla.setCurrent(formulario3);

    }

    //// Funciones de form 2

    if(c==f3 && d==formulario2){

                n1=new TextField("Ingresa el primer nuemro ","", 10,TextField.NUMERIC);

        n2=new TextField("Ingresa el segundo numero","",10,TextField.NUMERIC);

        formulario3.append(n1);

        formulario3.append(n2);

        formulario3.addCommand(suma);

        pantalla.setCurrent(formulario3);

        pantalla.setCurrent(formulario3);

    }

    //// Funciones de form3

    if(c==regresar && d==formulario3){

        pantalla.setCurrent((formulario2));

    }

    if(c==f1 && d==formulario3){

        pantalla.setCurrent(formulario1);

    }

    if(c==suma && d==formulario3){

        int a,b,s,r,m,di;

    a=Integer.parseInt(n1.getString());

    b=Integer.parseInt(n2.getString());

    s=a+b;

    r=a-b;

    m=a*b;

    di=a/b;

    pantalla.setCurrent(new Alert("Suma "+s+"\nResta "+r+"\nMult "+m+"\nDiv"+di));

    }

}

}
