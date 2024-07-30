let db;
const request = indexedDB.open('my_database', 1);

request.onerror = function (event) {
    console.log('Database error: ' + event.target.errorCode);
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log('Database opened successfully');
};

// 2. 创建对象存储空间（Object Store）
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore('my_object_store', {
        keyPath: 'id',
    });
    console.log('Object store created');
};

// 3. 添加数据
const transaction1 = db.transaction(['my_object_store'], 'readwrite');
const objectStore1 = transaction.objectStore('my_object_store');
const data = { id: 1, name: 'John', age: 30 };

const request = objectStore.add(data);

request.onsuccess = function (event) {
    console.log('Data added successfully');
};

request.onerror = function (event) {
    console.log('Error adding data: ' + event.target.errorCode);
};

// 4. 检索数据
const transaction2 = db.transaction(['my_object_store'], 'readonly');
const objectStore2 = transaction.objectStore('my_object_store');
const request = objectStore.get(1);

request.onsuccess = function (event) {
    const data = event.target.result;
    console.log('Retrieved data:', data);
};

request.onerror = function (event) {
    console.log('Error retrieving data: ' + event.target.errorCode);
};

// 5.更新和删除数据
// 更新数据
const transaction3 = db.transaction(['my_object_store'], 'readwrite');
const objectStore3 = transaction.objectStore('my_object_store');
const newData = { id: 1, name: 'Jane', age: 35 };
const request = objectStore.put(newData);

// 删除数据
const transaction = db.transaction(['my_object_store'], 'readwrite');
const objectStore = transaction.objectStore('my_object_store');
const request = objectStore.delete(1);
