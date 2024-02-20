class Employee {
    constructor(id, fullName, dob, department, salaryCoefficient) {
        this.id = id;
        this.fullName = fullName;
        this.dob = dob;
        this.department = department;
        this.salaryCoefficient = salaryCoefficient;
    }
  
    displayInfo() {
        return `
            <div class="employee">
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Họ và tên:</strong> ${this.fullName}</p>
                <p><strong>Ngày sinh:</strong> ${this.dob}</p>
                <p><strong>Phòng ban:</strong> ${this.department}</p>
                <p><strong>Hệ số lương:</strong> ${this.salaryCoefficient}</p>
            </div>
        `;
    }
  }
  
  let employees = [];
  
  function createEmployees() {
    const numEmployees = parseInt(prompt("Nhập số lượng nhân viên:"));
    for (let i = 0; i < numEmployees; i++) {
        const id = i + 1;
        const fullName = prompt(`Nhập họ và tên của nhân viên ${id}:`);
        const dob = prompt(`Nhập ngày tháng năm sinh của nhân viên ${id}:`);
        const department = prompt(`Nhập phòng ban của nhân viên ${id}:`);
        const salaryCoefficient = parseFloat(prompt(`Nhập hệ số lương của nhân viên ${id}:`));
        employees.push(new Employee(id, fullName, dob, department, salaryCoefficient));
    }
  }
  
  function displayEmployeeList() {
    const employeeListContainer = document.getElementById("employee-list");
    employeeListContainer.innerHTML = "";
    employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.innerHTML = employee.displayInfo();
        employeeListContainer.appendChild(employeeDiv);
    });
    document.getElementById("update-form").style.display = "block";
  }
  
  function updateEmployee() {
    const employeeId = parseInt(document.getElementById("employee-id").value);
    const employeeToUpdate = employees.find(employee => employee.id === employeeId);
    if (employeeToUpdate) {
        const fieldToUpdate = prompt(`Chọn trường thông tin muốn cập nhật cho nhân viên ${employeeId}: 
        1. Họ và tên 
        2. Ngày tháng năm sinh 
        3. Phòng ban 
        4. Hệ số lương`);
        switch (parseInt(fieldToUpdate)) {
            case 1:
                const newName = prompt("Nhập họ và tên mới:");
                employeeToUpdate.fullName = newName;
                break;
            case 2:
                const newDOB = prompt("Nhập ngày tháng năm sinh mới:");
                employeeToUpdate.dob = newDOB;
                break;
            case 3:
                const newDepartment = prompt("Nhập phòng ban mới:");
                employeeToUpdate.department = newDepartment;
                break;
            case 4:
                const newCoefficient = parseFloat(prompt("Nhập hệ số lương mới:"));
                employeeToUpdate.salaryCoefficient = newCoefficient;
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
        displayEmployeeList();
    } else {
        alert("Không tìm thấy nhân viên có ID tương ứng.");
    }
  }
  
  // Function để hiển thị danh sách nhân viên khi ấn vào nút
  function showEmployeeList() {
    if (employees.length === 0) {
        alert("Vui lòng tạo danh sách nhân viên trước khi hiển thị.");
    } else {
        displayEmployeeList();
    }
  }