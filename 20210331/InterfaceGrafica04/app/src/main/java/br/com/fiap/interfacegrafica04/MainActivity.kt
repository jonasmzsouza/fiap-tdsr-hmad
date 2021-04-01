package br.com.fiap.interfacegrafica04

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.CheckBox
import android.widget.RadioGroup
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    lateinit var chkSandubaGigante: CheckBox
    lateinit var chkXBurger: CheckBox
    lateinit var chkXSalada: CheckBox
    lateinit var chkXBacon: CheckBox
    lateinit var chkXTudo: CheckBox
    lateinit var chkPanqueca: CheckBox
    lateinit var chkMistoQuente: CheckBox
    lateinit var chkBeirute: CheckBox
    lateinit var rdgFormaPagamento: RadioGroup

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        chkSandubaGigante = findViewById(R.id.chkSandubaGigante)
        chkXBurger = findViewById(R.id.chkXBurger)
        chkXSalada = findViewById(R.id.chkXSalada)
        chkXBacon = findViewById(R.id.chkXBacon)
        chkXTudo = findViewById(R.id.chkXTudo)
        chkPanqueca = findViewById(R.id.chkPanqueca)
        chkMistoQuente = findViewById(R.id.chkMistoQuente)
        chkBeirute = findViewById(R.id.chkBeirute)
        rdgFormaPagamento = findViewById(R.id.rdgFormaPagamento)
    }

    fun finalizarPedido(view: View) {
        var total = 0.0

        if (chkSandubaGigante.isChecked) {
            total += 10
        }
        if (chkXBurger.isChecked) {
            total += 11
        }
        if (chkXSalada.isChecked) {
            total += 12
        }
        if (chkXBacon.isChecked) {
            total += 13
        }
        if (chkXTudo.isChecked) {
            total += 14
        }
        if (chkPanqueca.isChecked) {
            total += 15
        }
        if (chkMistoQuente.isChecked) {
            total += 16
        }
        if (chkBeirute.isChecked) {
            total += 17
        }

        val formaPagamento = rdgFormaPagamento.checkedRadioButtonId

        if (formaPagamento == -1) {
            Toast.makeText(this, "Selecione a forma de pagamento", Toast.LENGTH_SHORT).show()
        }
        if (total > 0 && formaPagamento != R.id.rdbCartaoCredito) {
            total *= 0.85
        }

        val msg = String.format("Total: R$ %.2f", total)
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }

}