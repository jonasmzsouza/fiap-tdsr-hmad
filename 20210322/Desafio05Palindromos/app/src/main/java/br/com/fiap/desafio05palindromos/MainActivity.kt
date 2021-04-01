package br.com.fiap.desafio05palindromos

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.EditText
import android.widget.Toast
import java.text.Normalizer

class MainActivity : AppCompatActivity() {

    lateinit var etInput: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        etInput = findViewById(R.id.etInput)

    }

    fun verificarString(view: View) {
        var strInput = etInput.text.toString().toLowerCase().replace(" ", "")
        val re = Regex("[^a-z]")
        strInput = re.replace(removeAcento(strInput), "")
        val strInvertida = strInput.reversed()

        var resp = "não é"

        if (strInvertida == strInput) {
            resp = "é"
        }

        val msg = "A palavra ou frase ${resp} palíndroma."

        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }

    fun removeAcento(str: String): String {
        var strSemAcento: String = Normalizer.normalize(str, Normalizer.Form.NFD)
        strSemAcento = strSemAcento.replace("[^\\p{ASCII}]", "")
        return strSemAcento
    }

}