import {
    LayoutDashboard,
    Layers,
    BarChart3,
    Users,
    Settings,
    Gamepad2,
    Archive,
    Trello,
    UserPlus,
    ShieldCheck
} from '@lucide/svelte';

export const navigation = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        href: '/'
    },
    {
        title: 'Projects',
        icon: Layers,
        children: [
            { title: 'Active Projects', href: '/projects/active', icon: Gamepad2 },
            { title: 'Archived', href: '/projects/archived', icon: Archive },
            { title: 'Templates', href: '/projects/templates', icon: Trello }
        ]
    },
    {
        title: 'Analytics',
        icon: BarChart3,
        href: '/analytics'
    },
    {
        title: 'Team',
        icon: Users,
        children: [
            { title: 'Members', href: '/team/members', icon: UserPlus },
            { title: 'Permissions', href: '/team/permissions', icon: ShieldCheck }
        ]
    },
    {
        title: 'Settings',
        icon: Settings,
        href: '/settings'
    }
];

export const user = {
    name: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    role: 'Senior Project Manager'
};

export const stats = [
    { label: 'Total Projects', value: '1,284', trend: '+12.5%', trendType: 'up' },
    { label: 'Active Users', value: '84.2k', trend: '+3.1%', trendType: 'up' },
    { label: 'Revenue', value: '$42,000', trend: '-1.2%', trendType: 'down' },
    { label: 'Tasks Done', value: '92%', trend: '+5.4%', trendType: 'up' }
];
