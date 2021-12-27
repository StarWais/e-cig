import { Menu, Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import NextLink from '../NextLink';
import Link from './Link';

export default function Catalog({ items, name }) {
  return (
    <Popover as="li" className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-2 hover:text-accent hover:transition-all cursor-pointer">
            {name}
            <ChevronDownIcon
              className={`h-3 w-3 ${
                open ? ' transform rotate-180 transition-all' : ''
              }`}
            />
          </Popover.Button>

          <Popover.Panel className="flex flex-col space-y-3 lg:absolute mt-6  min-w-full bg-transparent lg:bg-header p-3 rounded-b-md">
            {items?.map(({ name, link, id }) => (
              <NextLink
                key={id}
                href={link}
                className="hover:transition-all hover:text-accent"
              >
                {name}
              </NextLink>
            ))}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
