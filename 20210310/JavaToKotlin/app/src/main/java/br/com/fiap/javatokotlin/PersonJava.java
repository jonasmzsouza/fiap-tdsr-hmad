package br.com.fiap.javatokotlin;

public class PersonJava {

    private String name;
    private String email;

    public PersonJava(String name, String email) {
        this.name = name;
        this.email = email;

        Person person = new Person("Jonas", "jonas@email.com");
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
