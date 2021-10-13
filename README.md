# Project Title

O projeto disponibiliza a informação de todos o números válidos e inválidos
inseridos referentes ao regex disponibilizado.

## Description

Este projeto foi estruturado da seguinte forma, duas entidades Customer e Country, em que Customer
é a entidade que se regista e seu numero de telemóvel é validado. Country é a entidade que disponibiliza
os dados referentes ao País, Regex, código do pais, que são usados na validação do Customer ao ser registado
no sistema.

ao fazer POST : /Customer do objeto Customer, esse objeto é verificado se seu get.phone()
faz match com qualquer Regex da entidade Country.
Caso faça o state do Custumer é (true) e o Country referente é associado a Customer.
Caso não faça, o seu state é (False) e não lhe é associado nenhum Country.

essa é a logica de negócio que foi interpretado pelo enunciado.

relativamente ao Frontend, faz render uma pagina, em que disponibiliza uma tabela Customer
e outra tabela referente ao Country.


## Getting Started

### Dependencies

* maven
* java 11
* nodeJS

### Server

* Backend is running http://localhost:8080
* Frontend is running http://localhost:4200

### Executing program Backend

Compilar spring server 
```
 mvn clean package
```
Run Server
```
  java -jar ./targer/sqlitedemo-0.0.1-SNAPSHOT.jar
```

### Executing program Frontend

Run angular
```
ng serve
```
