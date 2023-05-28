import { Button, Group } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

function SpotlightControl() {
  return (
    <Group>
      <Button className="bg-blue-500 hover:bg-blue-600" 
      onClick={spotlight.open}>Open spotlight</Button>
    </Group>
  );
}

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size="1.2rem" />,
  },
];

export default function SpotlightButton() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + c"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
}