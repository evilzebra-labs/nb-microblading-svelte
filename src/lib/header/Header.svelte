<script>
	import routes from '../../routes/custom-routes';
	import { page } from '$app/stores';
	import {
		Navbar,
		NavHamburger,
		NavBrand,
		NavLi,
		NavUl,
		Dropdown,
		DropdownItem,
		Chevron,
		Drawer,
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		CloseButton,
	} from 'flowbite-svelte';

	import { sineIn } from 'svelte/easing';

	let showDrawer = true;
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn,
	};

	$: activeUrl = $page.url.pathname;
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<NavHamburger on:click={() => (showDrawer = false)} />
		<NavUl {hidden}>
			{#each routes as route}
				{#if !route?.children}
					<NavLi href={route.path} active={activeUrl === route.path}>{route.name}</NavLi>
				{:else}
					<NavLi
						id="{route.name}-dd"
						class="cursor-pointer"
						active={activeUrl.startsWith(`${route.path}`)}
						><Chevron aligned>{route.name}</Chevron></NavLi
					>
					<Dropdown triggeredBy="#{route.name}-dd" class="w-44 z-20">
						{#each route.children as child}
							<DropdownItem href={child.path}>{child.name}</DropdownItem>
						{/each}
					</Dropdown>
				{/if}
			{/each}
		</NavUl>
	</Navbar>
</header>

<Drawer
	transitionType="fly"
	{transitionParams}
	bind:hidden={showDrawer}
	id="sidebar2"
	placement="right"
>
	<div class="flex items-center">
		<h5
			id="drawer-navigation-label-3"
			class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
		>
			Menu
		</h5>
		<CloseButton on:click={() => (showDrawer = true)} class="mb-4 dark:text-white" />
	</div>
	<Sidebar>
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				{#each routes as route}
					{#if !route?.children}
						<SidebarItem label={route.name} active={activeUrl === route.path} href={route.path} />
					{:else}
						<SidebarDropdownWrapper
							label="Servicios"
							isOpen={activeUrl.startsWith(`${route.path}`)}
						>
							{#each route.children as child}
								<SidebarDropdownItem
									label={child.name}
									href={child.path}
									active={activeUrl === child.path}
								/>
							{/each}
						</SidebarDropdownWrapper>
					{/if}
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>
