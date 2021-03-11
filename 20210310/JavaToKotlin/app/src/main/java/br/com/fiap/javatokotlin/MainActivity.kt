package br.com.fiap.javatokotlin

import android.support.v7.app.AppCompatActivity
import android.os.Bundle

class Person(val nome:String, val email:String)

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        this.sum(20,10)

        val person = Person("Jonas", "jonas@email.com")

        val person2 = PersonJava("Mary", "mary@email.com")

        val total:Int = 0
    }

    fun sum(a:Int, b:Int): Int {
        return a + b
    }
}

