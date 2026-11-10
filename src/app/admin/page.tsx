import { Col, Container, Row } from 'react-bootstrap';
import ContactCardAdmin from '@/components/ContactCardAdmin';
import { auth } from '@/lib/auth';
import { adminProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';

const AdminPage = async () => {
  const session = await auth();
  adminProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );

  const contacts = await prisma.contact.findMany({
    orderBy: { id: 'asc' },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <h2 className="text-center">List Contacts (Admin)</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCardAdmin contact={contact} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
