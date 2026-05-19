import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type props = {
  classes: string;
  src?: string;
};
export function AvatarComponent({ classes }: props) {
  return (
    <Avatar className={classes}>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
