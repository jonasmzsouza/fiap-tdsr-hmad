package br.com.fiap.cp02.RM84575

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.CheckBox
import android.widget.EditText
import android.widget.RadioGroup
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    lateinit var rdgListaMaterial : RadioGroup
    lateinit var txtMedidaM2 : EditText
    lateinit var chkFrete : CheckBox
    lateinit var txtValorCalculado : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        rdgListaMaterial = findViewById(R.id.rdgListaMaterial)
        txtMedidaM2 = findViewById(R.id.txtMedidaM2)
        chkFrete = findViewById(R.id.chkFrete)
        txtValorCalculado = findViewById(R.id.txtValorCalculado)
    }

    /**
    * Evento disparado pelo botão calcularOrcamento
    *
    * @param view
     */
    fun calcularOrcamento(view: View) {
        var valorTotal = 0.0
        var medidaM2 = txtMedidaM2.text.toString().toDouble()
        val listaMaterial = rdgListaMaterial.checkedRadioButtonId

        if(medidaM2 >= 0.0 && listaMaterial != -1) {

            if(listaMaterial == R.id.rdbPisoBcoBaixoBril) {
                valorTotal = 24.9 * medidaM2
            }

            if(listaMaterial == R.id.rdbPisoAlbania45x45) {
                valorTotal = 11.9 * medidaM2
            }

            if(listaMaterial == R.id.rdbPorcelanatoPerlatoBco) {
                valorTotal = 39.9 * medidaM2
            }

            if(listaMaterial == R.id.rdbRevestimentoMosaico) {
                valorTotal = 16.9 * medidaM2
            }

        }

        if(chkFrete.isChecked) {
            valorTotal *= 1.3
        }

        val resultado = String.format("$ %.2f", valorTotal)
        txtValorCalculado.text = resultado

    }

}