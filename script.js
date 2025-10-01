let display = document.getElementById('result');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        
        let expression = display.value.replace(/×/g, '*');
        let result = eval(expression);
        
       
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'خطأ';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'خطأ';
    }
}

// إضافة إمكانية استخدام لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9]|\.|\+|\-|\*|\//.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});