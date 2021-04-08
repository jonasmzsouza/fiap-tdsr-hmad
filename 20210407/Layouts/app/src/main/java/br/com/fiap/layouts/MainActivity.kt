package br.com.fiap.layouts

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun abrirActivity(view: View) {
        val activity = when (view.id) {
            R.id.btnRelative -> RelativeLayoutActivity::class.java
            R.id.btnAbsolute -> AbsoluteLayoutActivity::class.java
            else -> FrameLayoutActivity::class.java
        }

        val it = Intent(this, activity)
        startActivity(it)
    }

}