# Ejercicios de React Router
___

### Ejercicio 3: React Flags

El objetivo de la aplicación es que al dar click al menú lateral se muestren las banderas de cada país en el centro.

Sin embargo, la aplicación está incompleta y en este momento sólo se muestra una bandera, esto se debe a que la url está "harcodeada" en el componente Flag:

`https://www.countryflags.io/mx/flat/64.png`

Lo primero que debes hacer es modificar el componente menú para que al dar click en un elemento se muestre en la URL el código de país, por ejemplo:

`http://localhost/mx`

Además, en el componente de Flag debe de leer la variable que está en la URL (mx) y cambiarla en la url "harcodeada" para que muestre al país seleccionado.

**Bonus**

Debes resaltar en el menú al elemento que se está mostrando. (TIP: debes usar el HOC withRouter)