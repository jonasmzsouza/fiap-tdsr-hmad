package br.com.fiap.cp02.RM84575

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.*

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
        var strMedidaM2 = txtMedidaM2.text.toString().trim()

        if(strMedidaM2.isNullOrEmpty()) {
            toast(getString(R.string.informe_corretamente_m2))
            return
        }

        try {
            val medidaM2 = strMedidaM2.toDouble()

            if (medidaM2 <= 0) {
                toast(getString(R.string.informe_maior_que_0))
                return
            }

            var valorTotal = when (rdgListaMaterial.checkedRadioButtonId) {
                R.id.rdbPisoBcoBaixoBril -> 24.9
                R.id.rdbPisoAlbania45x45 -> 11.9
                R.id.rdbPorcelanatoPerlatoBco -> 39.9
                R.id.rdbRevestimentoMosaico -> 16.9
                else -> 0.0
            }

            valorTotal *= medidaM2

            if(chkFrete.isChecked) {
                valorTotal *= 1.3
            }

            txtValorCalculado.text = String.format("$ %.2f", valorTotal)

        } catch (e : Exception) {
            toast("${getString(R.string.ocorreu_um_erro)} ${e.message}")
        }
    }

    /**
     *  Toast padronizado para este app
     *
     *  @param msg
     */
    fun toast(msg : String) {
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }

}