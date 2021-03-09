package br.com.fiap.firstform;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText edtName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edtName = findViewById(R.id.edtName);
    }

    public void send(View view) {
        String name = edtName.getText().toString();
        
        if (name.trim().isEmpty()){
            Toast.makeText(this, "type the name correctly", Toast.LENGTH_SHORT).show();
        }
        else {
            Toast.makeText(this, "Hello " + name, Toast.LENGTH_SHORT).show();
        }
    }
}