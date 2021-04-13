package br.com.fiap.listagemdedados

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class PaisActivity : AppCompatActivity() {
    
    lateinit var tvInfoPais : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pais)

        tvInfoPais = findViewById(R.id.tvInfoPais)

        val extras = this.intent.extras
        if ( extras != null) {
            val nome = extras.getString("nome", "")
            val posicao = extras.getInt("posicao", -1)

            this.title = nome

            tvInfoPais.text = "${nome} - Posição: ${posicao + 1}"
        }
    }
}