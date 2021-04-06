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

    /**
     *  Evento disparado pelo botão verificarString
     *
     *  @param view
     */
    fun verificarString(view: View) {
        var strInput = etInput.text.toString().trim().toLowerCase()

        if (strInput.isEmpty()) {
            toast(getString(R.string.Informe_corretamente))
            return
        }

        val regex = "[^a-z]".toRegex()
        strInput = regex.replace(removeAcento(strInput), "")
        val strInvertida = strInput.reversed()

        val msg = if (strInput.equals(strInvertida)) getString(R.string.eh_palindormo) else getString(R.string.nao_eh_palindromo)

        toast(msg)
    }

    /**
     *  Função que substitui vogais com acentos verificarString
     *
     *  @param str
     *  @return String
     */
    fun removeAcento(str: String): String {
        var strSemAcento: String = Normalizer.normalize(str, Normalizer.Form.NFD)
        strSemAcento = strSemAcento.replace("[^\\p{ASCII}]", "")
        return strSemAcento
    }

    fun toast(msg: String) {
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }

}