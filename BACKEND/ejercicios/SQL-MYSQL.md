![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png 'logotipo de The Bridge')

## SQL y MySQL

### 1. Crea una base de datos

A continuación, crearás una base de datos. El objetivo de este proyecto es aprender a trabajar en una base de datos y hacer consultas SQL.

- [ ] 1.1.- Crea una base de datos
Crea una base de datos que se llame my_company_database. La base de datos deberá contener la siguiente tabla:
  - employees. A su vez tendrá los siguientes campos:
    - id
    - birth_date  
    - first_name
    - last_name
    - gender


- [ ] 1.2.- Añade columnas nuevas a la tabla creada
Añade 3 columnas nuevas a la tabla:
  - Columna "salary"
  - Columna "title"
  - Columna "title_date"(fecha)


## 2. Ejecute las siguientes consultas SQL

- [ ] 2.1.- INSERTAR DATOS
Inserta al menos 15 nuevos empleados:
  - Al menos 3 empleados deben tener el mismo nombre.
  - Los salarios de los empleados deben oscilar en un rango de
  - 5000 y 50.000 y deben variar entre diferentes géneros.
  - Todos los empleados tienen un título.
  - Al menos 5 títulos son de 2020.
  
- [ ] 2.2.- ACTUALIZAR DATOS
Actualizar a los empleados:

**Si lo hacemos desde la terminal seguid el enunciado tal cual, si lo estáis haciendo con workbench o dbeaver actualizadlo por (primary_key), es decir, el valor único que en este caso será el id.**

  - Cambiar el nombre de un empleado. Para ello, genera una consulta que afecte solo a un determinado empleado en función de su nombre, apellido y fecha de nacimiento.

- [ ] 2.3.- OBTENER DATOS

  - Selecciona todos los empleados con un salario superior a 20.000
  - Selecciona todos los empleados con un salario inferior a 10.000
  - Selecciona todos los empleados que tengan un salario entre 14.000 y 50.000
  - Selecciona el número total de empleados
  - Selecciona los títulos del año 2019
  - Selecciona solo el nombre de los empleados y que se vean en mayúsculas
  - Seleccionar el nombre de los empleados sin que se repita ninguno

- [ ] 2.4.- BORRAR DATOS

**Si lo hacemos desde la terminal seguid el enunciado tal cual, si lo estáis haciendo con workbench o dbeaver actualizadlo por (primary_key), es decir, el valor único que en este caso será el id.**
  - Elimina el empleado con id = 5
  - Eliminar a todos los empleados con un salario superior a 20.000
