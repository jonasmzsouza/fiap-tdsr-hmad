package br.com.fiap.desafio04permutaimagens

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView

class MainActivity : AppCompatActivity() {

    lateinit var imgShape01 : ImageView
    lateinit var imgShape02 : ImageView

    var inverter = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        imgShape01 = findViewById(R.id.imgShape01)
        imgShape02 = findViewById(R.id.imgShape02)
    }

    fun trocarImagem(view: View) {
        this.inverter = !this.inverter

        val img01 = if (inverter) R.drawable.triangle else R.drawable.square
        val img02 = if (inverter) R.drawable.square else R.drawable.triangle

        imgShape01.setImageResource(img01)
        imgShape02.setImageResource(img02)
    }
}