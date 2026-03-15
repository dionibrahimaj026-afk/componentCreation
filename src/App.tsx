import { useState, useEffect } from 'react'
import {
  Button,
  Input,
  Dropdown,
  Checkbox,
  Radio,
  Table,
  Card,
  Badge,
  Alert,
  Modal,
  Tabs,
  Tooltip,
  ScrollArea,
  Calendar,
  Spinner,
  Pagination,
  CodeBlock,
} from './components'
import styles from './App.module.css'

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'dark'
  )
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])
  const [paginationPage, setPaginationPage] = useState(1)
  const [dropdownValue, setDropdownValue] = useState('')
  const [dismissedAlert, setDismissedAlert] = useState(false)

  const dropdownOptions = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
    { value: 'd', label: 'Option D' },
  ]

  const tableData = [
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'User', status: 'Active' },
    { id: 3, name: 'Carol', role: 'Editor', status: 'Pending' },
    { id: 4, name: 'Dave', role: 'User', status: 'Active' },
    { id: 5, name: 'Eve', role: 'Viewer', status: 'Inactive' },
  ]

  const tableColumns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    {
      key: 'status',
      header: 'Status',
      render: (row: { status: string }) => (
        <Badge variant={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'neutral'}>
          {row.status}
        </Badge>
      ),
    },
  ]

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Component Library Showcase</h1>
        <p>A mini design system with reusable UI components</p>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={() => setDarkMode((d) => !d)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>1. Foundation — Colors</h2>
          <div className={styles.colorGrid}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-primary)' }}>Primary</div>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-secondary)' }}>Secondary</div>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-success)' }}>Success</div>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-warning)' }}>Warning</div>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-error)' }}>Error</div>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-neutral-500)' }}>Neutral</div>
          </div>
          <CodeBlock code={`<div style={{ background: 'var(--color-primary)' }}>Primary</div>
<div style={{ background: 'var(--color-secondary)' }}>Secondary</div>
<div style={{ background: 'var(--color-success)' }}>Success</div>
<div style={{ background: 'var(--color-warning)' }}>Warning</div>
<div style={{ background: 'var(--color-error)' }}>Error</div>
<div style={{ background: 'var(--color-neutral-500)' }}>Neutral</div>`} />
        </section>

        <section className={styles.section}>
          <h2>2. Foundation — Typography</h2>
          <div className={styles.typography}>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p className={styles.bodyText}>
              Body text: The quick brown fox jumps over the lazy dog. Font: DM Sans.
            </p>
            <p style={{ fontSize: 'var(--text-sm)' }}>Small text</p>
            <p style={{ fontSize: 'var(--text-lg)' }}>Large text</p>
          </div>
          <CodeBlock code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<p style={{ fontSize: 'var(--text-base)' }}>Body text</p>
<p style={{ fontSize: 'var(--text-sm)' }}>Small text</p>
<p style={{ fontSize: 'var(--text-lg)' }}>Large text</p>`} />
        </section>

        <section className={styles.section}>
          <h2>3. Foundation — Spacing & Radius</h2>
          <p>Spacing: 4, 8, 12, 16, 24, 32, 48px. Radius: sm (4px), md (8px), lg (16px).</p>
          <div className={styles.spacingDemo}>
            <div style={{ padding: 'var(--space-2)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-sm)' }}>4px</div>
            <div style={{ padding: 'var(--space-4)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)' }}>16px</div>
            <div style={{ padding: 'var(--space-6)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)' }}>24px</div>
          </div>
          <CodeBlock code={`<div style={{ padding: 'var(--space-2)', borderRadius: 'var(--radius-sm)' }}>4px</div>
<div style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-md)' }}>16px</div>
<div style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)' }}>24px</div>`} />
        </section>

        <section className={styles.section}>
          <h2>4. Buttons</h2>
          <div className={styles.grid}>
            <div>
              <h4>Variants</h4>
              <div className={styles.flexWrap}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>
            <div>
              <h4>Sizes</h4>
              <div className={styles.flexWrap}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h4>States</h4>
              <div className={styles.flexWrap}>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button iconOnly aria-label="Settings">⚙</Button>
              </div>
            </div>
          </div>
          <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button iconOnly aria-label="Settings">⚙</Button>`} />
        </section>

        <section className={styles.section}>
          <h2>5. Inputs</h2>
          <div className={styles.inputGrid}>
            <Input label="Text" placeholder="Enter text" />
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Input label="With error" error="This field is required" defaultValue="invalid" />
            <Input label="Disabled" disabled placeholder="Disabled" />
            <Input label="Helper text" helperText="Optional helper message" />
          </div>
          <CodeBlock code={`<Input label="Text" placeholder="Enter text" />
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Password" type="password" placeholder="••••••••" />
<Input label="With error" error="This field is required" />
<Input label="Disabled" disabled placeholder="Disabled" />
<Input label="Helper text" helperText="Optional helper message" />`} />
        </section>

        <section className={styles.section}>
          <h2>6. Dropdown</h2>
          <div className={styles.flexWrap}>
            <Dropdown
              label="Choose option"
              options={dropdownOptions}
              placeholder="Choose..."
              value={dropdownValue}
              onChange={setDropdownValue}
            />
            <Dropdown options={dropdownOptions} placeholder="No label" />
            <Dropdown options={dropdownOptions} disabled placeholder="Disabled" />
          </div>
          <CodeBlock code={`const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
]

<Dropdown label="Choose option" options={options} placeholder="Choose..." value={value} onChange={setValue} />
<Dropdown options={options} placeholder="No label" />
<Dropdown options={options} disabled placeholder="Disabled" />`} />
        </section>

        <section className={styles.section}>
          <h2>7. Checkbox & Radio</h2>
          <div className={styles.flexWrap}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Disabled" disabled />
          </div>
          <div style={{ marginTop: 'var(--space-4)' }}>
            <Radio
              label="Choose one"
              name="demo"
              options={[
                { value: 'a', label: 'Option A' },
                { value: 'b', label: 'Option B' },
                { value: 'c', label: 'Option C' },
              ]}
            />
          </div>
          <CodeBlock code={`<Checkbox label="Unchecked" />
<Checkbox label="Checked" defaultChecked />
<Checkbox label="Indeterminate" indeterminate />
<Checkbox label="Disabled" disabled />

<Radio
  label="Choose one"
  name="demo"
  options={[
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
  ]}
/>`} />
        </section>

        <section className={styles.section}>
          <h2>8. Tables</h2>
          <Table columns={tableColumns} data={tableData} striped />
          <h4 style={{ marginTop: 'var(--space-4)' }}>Compact table</h4>
          <Table columns={tableColumns} data={tableData.slice(0, 3)} compact />
          <CodeBlock code={`const columns = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status', render: (row) => <Badge>{row.status}</Badge> },
]

<Table columns={columns} data={data} striped />
<Table columns={columns} data={data} compact />`} />
        </section>

        <section className={styles.section}>
          <h2>9. Cards</h2>
          <div className={styles.cardGrid}>
            <Card title="Default Card" variant="default">
              <p>Content with default border style.</p>
              <Button size="sm">Action</Button>
            </Card>
            <Card title="Bordered Card" variant="bordered">
              <p>Content with thicker border.</p>
              <Button size="sm" variant="outline">Action</Button>
            </Card>
            <Card
              title="Elevated Card"
              variant="elevated"
              footer={<Button size="sm">Confirm</Button>}
            >
              <p>Content with shadow, optional footer.</p>
            </Card>
          </div>
          <CodeBlock code={`<Card title="Default Card" variant="default">
  <p>Content with default border style.</p>
  <Button size="sm">Action</Button>
</Card>

<Card title="Bordered Card" variant="bordered">
  <p>Content with thicker border.</p>
</Card>

<Card title="Elevated Card" variant="elevated" footer={<Button>Confirm</Button>}>
  <p>Content with shadow, optional footer.</p>
</Card>`} />
        </section>

        <section className={styles.section}>
          <h2>10. Badges</h2>
          <div className={styles.flexWrap}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge size="sm">Small</Badge>
            <Badge>3</Badge>
          </div>
          <CodeBlock code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="neutral">Neutral</Badge>
<Badge size="sm">Small</Badge>
<Badge>3</Badge>`} />
        </section>

        <section className={styles.section}>
          <h2>11. Alerts</h2>
          <div className={styles.alertStack}>
            <Alert type="info" title="Info" message="This is an informational message." />
            <Alert type="success" title="Success" message="Operation completed successfully." />
            <Alert type="warning" title="Warning" message="Please review before continuing." />
            <Alert type="error" title="Error" message="Something went wrong." />
            {!dismissedAlert && (
              <Alert
                type="info"
                title="Dismissible"
                message="Click × to dismiss."
                onDismiss={() => setDismissedAlert(true)}
              />
            )}
          </div>
          <CodeBlock code={`<Alert type="info" title="Info" message="This is an informational message." />
<Alert type="success" title="Success" message="Operation completed successfully." />
<Alert type="warning" title="Warning" message="Please review before continuing." />
<Alert type="error" title="Error" message="Something went wrong." />
<Alert type="info" title="Dismissible" message="Click × to dismiss." onDismiss={() => {}} />`} />
        </section>

        <section className={styles.section}>
          <h2>12. Modal</h2>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Modal Title"
            footer={
              <>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button onClick={() => setModalOpen(false)}>Confirm</Button>
              </>
            }
          >
            <p>This is the modal body. You can put any content here. Close with the button, overlay click, or Escape.</p>
          </Modal>
          <CodeBlock code={`const [modalOpen, setModalOpen] = useState(false)

<Button onClick={() => setModalOpen(true)}>Open Modal</Button>
<Modal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  title="Modal Title"
  footer={
    <>
      <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
      <Button onClick={() => setModalOpen(false)}>Confirm</Button>
    </>
  }
>
  <p>Modal body content.</p>
</Modal>`} />
        </section>

        <section className={styles.section}>
          <h2>13. Tabs</h2>
          <Tabs
            tabs={[
              { id: '1', label: 'Tab 1', content: <p>Content for tab 1.</p> },
              { id: '2', label: 'Tab 2', content: <p>Content for tab 2.</p> },
              { id: '3', label: 'Tab 3', content: <p>Content for tab 3.</p> },
            ]}
          />
          <CodeBlock code={`<Tabs
  tabs={[
    { id: '1', label: 'Tab 1', content: <p>Content for tab 1.</p> },
    { id: '2', label: 'Tab 2', content: <p>Content for tab 2.</p> },
    { id: '3', label: 'Tab 3', content: <p>Content for tab 3.</p> },
  ]}
/>`} />
        </section>

        <section className={styles.section}>
          <h2>14. Tooltips</h2>
          <div className={styles.flexWrap}>
            <Tooltip content="Tooltip on top" position="top">
              <Button variant="outline">Hover me (top)</Button>
            </Tooltip>
            <Tooltip content="Tooltip on bottom" position="bottom">
              <Button variant="outline">Hover me (bottom)</Button>
            </Tooltip>
            <Tooltip content="Tooltip on left" position="left">
              <Button variant="outline">Hover me (left)</Button>
            </Tooltip>
            <Tooltip content="Tooltip on right" position="right">
              <Button variant="outline">Hover me (right)</Button>
            </Tooltip>
          </div>
          <CodeBlock code={`<Tooltip content="Tooltip on top" position="top">
  <Button variant="outline">Hover me (top)</Button>
</Tooltip>
<Tooltip content="Tooltip on bottom" position="bottom">
  <Button variant="outline">Hover me (bottom)</Button>
</Tooltip>
<Tooltip content="Tooltip on left" position="left">
  <Button variant="outline">Hover me (left)</Button>
</Tooltip>
<Tooltip content="Tooltip on right" position="right">
  <Button variant="outline">Hover me (right)</Button>
</Tooltip>`} />
        </section>

        <section className={styles.section}>
          <h2>15. Scroll Area</h2>
          <div className={styles.scrollDemo}>
            <ScrollArea maxHeight={120}>
              <p>Short content. No scroll needed.</p>
            </ScrollArea>
            <ScrollArea maxHeight={120}>
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i}>Line {i + 1} of scrollable content.</p>
              ))}
            </ScrollArea>
          </div>
          <CodeBlock code={`<ScrollArea maxHeight={120}>
  <p>Short content. No scroll needed.</p>
</ScrollArea>

<ScrollArea maxHeight={120}>
  {items.map((item) => <p key={item.id}>{item.text}</p>)}
</ScrollArea>`} />
        </section>

        <section className={styles.section}>
          <h2>16. Calendar</h2>
          <Calendar />
          <CodeBlock code={`<Calendar />

<Calendar year={2025} month={2} onSelectDate={(date) => console.log(date)} />`} />
        </section>

        <section className={styles.section}>
          <h2>17. Loading / Spinner</h2>
          <div className={styles.flexWrap}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
          <CodeBlock code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`} />
        </section>

        <section className={styles.section}>
          <h2>18. Pagination</h2>
          <div className={styles.flexWrap}>
            <Pagination
              currentPage={1}
              totalPages={5}
              onPageChange={() => {}}
            />
            <Pagination
              currentPage={paginationPage}
              totalPages={5}
              onPageChange={setPaginationPage}
            />
          </div>
          <CodeBlock code={`<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
/>`} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Component Library — Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
