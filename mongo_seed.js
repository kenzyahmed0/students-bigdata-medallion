use('school_db');

// يمسح أي داتا قديمة عشان لو اتشغل مرتين مايتكررش
db.getCollection('students').deleteMany({});
db.getCollection('attendances').deleteMany({});
db.getCollection('grades').deleteMany({});

db.getCollection('students').insertMany([
  { student_id: 1, name: 'Ahmed Ali',    age: 20, department: 'CS' },
  { student_id: 2, name: 'Sara Hassan',  age: 21, department: 'IT' },
  { student_id: 3, name: 'Mona Khaled',  age: 20, department: 'CS' },
  { student_id: 4, name: 'Omar Youssef', age: 22, department: 'IS' },
  { student_id: 5, name: 'Nour Adel',    age: 21, department: 'IT' },
]);

db.getCollection('attendances').insertMany([
  { student_id: 1, date: '2026-10-01', status: 'present' },
  { student_id: 1, date: '2026-10-02', status: 'absent'  },
  { student_id: 2, date: '2026-10-01', status: 'present' },
  { student_id: 2, date: '2026-10-02', status: 'present' },
  { student_id: 3, date: '2026-10-01', status: 'absent'  },
  { student_id: 3, date: '2026-10-02', status: 'present' },
  { student_id: 4, date: '2026-10-01', status: 'present' },
  { student_id: 5, date: '2026-10-01', status: 'absent'  },
]);

db.getCollection('grades').insertMany([
  { student_id: 1, course: 'Math',    grade: 85 },
  { student_id: 1, course: 'Physics', grade: 78 },
  { student_id: 2, course: 'Math',    grade: 92 },
  { student_id: 3, course: 'Math',    grade: 66 },
  { student_id: 4, course: 'Physics', grade: 74 },
  { student_id: 5, course: 'Math',    grade: 88 },
]);

console.log('Seed done');