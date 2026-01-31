body {
  font-family: Arial, sans-serif;
  background: #f5f7fa;
  padding: 20px;
}

h1 {
  text-align: center;
}

.malla {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.semestre {
  background: white;
  padding: 15px;
  border-radius: 10px;
  width: 260px;
}

.ramos {
  display: grid;
  gap: 10px;
}

.ramo {
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  background: #c4dafa;
  color: black;
  font-weight: bold;
  transition: all 0.2s ease;
}

.ramo.aprobado {
  background: #4d82bc;
  color: white;
  text-decoration: line-through;
}

.ramo.bloqueado {
  background: #bfbfbf;
  color: #555;
  cursor: not-allowed;
}
