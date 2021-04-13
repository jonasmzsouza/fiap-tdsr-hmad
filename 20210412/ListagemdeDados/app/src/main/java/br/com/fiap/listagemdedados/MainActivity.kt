package br.com.fiap.listagemdedados

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    val paises = arrayOf(
        "Afeganistão",
        "Alemanha",
        "Argentina",
        "Brasil",
        "Bélgica",
        "Bolívia",
        "Camarões",
        "Canadá",
        "Colômbia",
        "Dinamarca",
        "Djibouti",
        "Espanha",
        "Equador",
        "Estônia",
        "Finlândia",
        "França",
        "Filipinas"
    )

    lateinit var lvPaises : ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        lvPaises = findViewById(R.id.lvPaises)
        val adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, paises)

        lvPaises.adapter = adapter
        lvPaises.setOnItemClickListener { parent, view, position, id ->
            val it = Intent(this, PaisActivity::class.java)
            it.putExtra("nome", paises[position])
            it.putExtra("posicao", position)
            startActivity(it)
        }
    }
}