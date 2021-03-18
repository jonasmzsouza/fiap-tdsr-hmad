package br.com.fiap.calculadorafiap

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    lateinit var etNumero01 : EditText
    lateinit var etNumero02 : EditText
    lateinit var tvResultado : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        etNumero01 = findViewById(R.id.etNumero01)
        etNumero02 = findViewById(R.id.etNumero02)
        tvResultado = findViewById(R.id.tvResultado)
    }

    fun validar(numero:String, campo:String) : Boolean {
        if(numero.trim().isEmpty()) {
            Toast.makeText(
                this,
                "Informe corretamente o ${campo} número inteiro",
                Toast.LENGTH_SHORT
            ).show()
            return false
        }

        return true
    }

    fun somar(view: View) {
        var strNumero01 = etNumero01.text.toString()
        var strNumero02 = etNumero02.text.toString()
        var validadoNumero01 = validar(strNumero01, "primeiro")
        var validadoNumero02 = validar(strNumero02, "segundo")

        if (!validadoNumero01 || !validadoNumero02) {
            return
        }

        try {
            val numero01 = strNumero01.toInt()
            val numero02 = strNumero02.toInt()

            val soma = numero01 + numero02

            tvResultado.text = "A soma atual é: ${soma}"
        } catch (e:Exception) {
            Toast.makeText(
                this, "Não foi possível somar os valores informados",
                Toast.LENGTH_SHORT
            ).show()
        }

    }
}