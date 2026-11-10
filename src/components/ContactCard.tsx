'use client';

import { Card, Image } from 'react-bootstrap';
import type { Contact } from '@/lib/validationSchemas';

type ContactCardProps = {
  contact: Contact;
};

const ContactCard = ({ contact }: ContactCardProps) => (
  <Card className="h-100">
    <Card.Header className="text-center">
      <Image
        src={contact.image}
        alt={`${contact.firstName} ${contact.lastName}`}
        width={75}
        height={75}
        roundedCircle
        style={{ objectFit: 'cover' }}
      />
      <Card.Title className="mt-2">
        {contact.firstName} {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ContactCard;
