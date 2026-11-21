import AdminGate from './AdminGate'
import ContactList from './contactlist'

export const dynamic = 'force-dynamic'

export default function AdminPage() {
  return (
    <AdminGate>
      <div className="p-8">
        <ContactList />
      </div>
    </AdminGate>
  )
}