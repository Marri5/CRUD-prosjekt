document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employee-form');
    const employeeList = document.getElementById('employee-list');
  
    // Fetch employees
    async function fetchEmployees() {
      const res = await fetch('/api/employees');
      const data = await res.json();
      employeeList.innerHTML = '';
      data.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.name} - ${employee.position} - ${employee.department} - $${employee.salary}`;
        employeeList.appendChild(li);
      });
    }
  
    // Add employee
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const position = document.getElementById('position').value;
      const department = document.getElementById('department').value;
      const salary = document.getElementById('salary').value;
  
      await fetch('/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, position, department, salary }),
      });
  
      fetchEmployees();
    });
  
    fetchEmployees();
  });
  