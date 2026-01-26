import * as Popover from "@radix-ui/react-popover";

export default function PopoverComponent() {
  return (
    <Popover.Root className="flex flex-col items-center">
      <Popover.Trigger asChild>
        <button>Click me for a surprise</button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <section className="text-emerald-800">
            <h2>This website is awesome!</h2>
            <p>Register, sign in and watch us sell your data!</p>
          </section>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}