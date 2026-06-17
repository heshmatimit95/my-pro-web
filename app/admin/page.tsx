"use client";
// ../ باعث می‌شود یک سطح به عقب (پوشه app) برگردید
import ContactList from '../admin/contactlist'; 

export default function AdminPage() {
  return (
    <div className="p-8">
      <ContactList />
    </div>
  );
}
