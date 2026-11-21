import ContactList from './contactlist'

export const dynamic = 'force-dynamic'

export default function AdminPage() {
  return (
    <div className="p-8">
      <ContactList />
    </div>
  )
}