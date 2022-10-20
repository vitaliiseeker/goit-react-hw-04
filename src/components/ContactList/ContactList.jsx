import React from 'react';
import PropTypes from 'prop-types';
import { Item, Name, Link } from "./ContactList.styled";
import { Button } from '../Button/Button';
import { ReactComponent as IconSvg } from "../../components/icons/iconPhone.svg";

export const ContactList = ({ contacts, deleteContact }) => (
    <>
        <ul>
            {contacts.map(({ id, name, number }) =>
                <Item key={id}>
                    <Name>🧑 {name + ":  " + number}</Name>
                    <Link
                        href={"tel: " + number}
                        type="tel">
                        <IconSvg width="25" height="25" />
                    </Link>
                    <Button
                        type="button"
                        onClick={() => deleteContact(id)}
                        children="Delete">
                    </Button>
                </Item>)
            }
        </ul>
    </>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
}
