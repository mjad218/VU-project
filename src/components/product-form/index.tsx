"use client";
import { TextureBackground } from "../texture-wrapper";
import { FormControl } from "../form-control";
import { Input } from "../input";
import { CustomButton } from "../custom-button";
import ReactSelect, { IOption } from "../react-select";
import { DropFiles } from "../drop-zone";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { RowContainer } from "../row";
import { cn } from "@/utils";
import { Tag } from "@/types/tag";
import { Product } from "@/types/product";
import { API_URL } from "@/constants";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../current-user";

const AVAILABLE_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

type IProps = {
  tags: Tag[];
};
export const ProductForm = (props: IProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [tags, setTags] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const genSrc = (file: File) => {
    setImagesSrc((prev) => [...prev, URL.createObjectURL(file)]);
    console.log(URL.createObjectURL(file));
  };
  const { accessToken } = useCurrentUser();
  const router = useRouter();
  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const product = {
        name: name ?? "",
        price: (price ?? "").toString(),
        description: description ?? "",
        quantity: (quantity ?? "").toString(),
        sizes: JSON.stringify(sizes ?? []),
        tagsIds: JSON.stringify(tags ?? []),
      };
      Object.entries(product).forEach(([key, val]) =>
        formData.append(key, val)
      );
      formData.append("photos", JSON.stringify(images));
      const req = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!req.ok) throw "FAILED ";
      const p = (await req.json()) as Product;
      console.log({
        p,
      });
      if (p?.id) router.push(`/product/${p.id}`);
    } catch (error) {}
  };
  return (
    <form onSubmit={handleCreate}>
      <RowContainer>
        <div className="flex gap-3 my-5 justify-center">
          {imagesSrc.map((img) => (
            <Image
              key={img}
              src={img}
              width={128}
              height={128}
              alt="image"
              className=" object-cover w-32 h-32 rounded-lg flex items-center justify-center border border-solid border-[var(--grey)]"
            />
          ))}
          <DropFiles
            onDrop={(fls) => {
              setImages(fls);
              fls.forEach(genSrc);
            }}
          />
        </div>
      </RowContainer>
      <RowContainer>
        <TextureBackground className="mx-auto max-w-full w-[450px] px-5 py-10 rounded-2xl my-5 overflow-y-auto">
          <div className="flex gap-5 flex-col">
            <div className="flex flex-row gap-2">
              <FormControl>
                <label
                  htmlFor="Name"
                  className="font-title text-[var(--brown)]"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full"
                />
              </FormControl>
              <FormControl>
                <label
                  htmlFor="price"
                  className="font-title text-[var(--brown)]"
                >
                  Price
                </label>

                <Input
                  type="number"
                  id="price"
                  onChange={(e) => setPrice(Number(e.target.value))}
                  value={price}
                />
              </FormControl>
            </div>
            <FormControl className="flex ">
              <label
                htmlFor="quantity"
                className="font-title text-[var(--brown)] w-200px flex flex-1"
              >
                Available Quantity
              </label>

              <Input
                type="number"
                id="quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
                value={quantity}
                className=" shrink-1"
              />
            </FormControl>

            <FormControl>
              <label
                htmlFor="ffdg"
                className="font-title text-[var(--brown)] w-200px flex flex-1"
              >
                Tags
              </label>

              <ReactSelect
                onChange={(v) =>
                  setTags(((v as IOption[]) ?? []).map((o) => o.value))
                }
                isMulti
                options={(props.tags ?? []).map((t) => ({
                  value: (t?.id ?? "").toString(),
                  label: t?.name ?? "",
                }))}
                value={(tags ?? []).map((t) => ({
                  value: (t ?? "").toString(),
                  label:
                    (props.tags ?? []).find((tag) => tag?.id == Number(t))
                      ?.name ?? "",
                }))}
              />
            </FormControl>

            <FormControl>
              <label
                htmlFor="textAreardss"
                className="font-title text-[var(--brown)] w-200px flex flex-1"
              >
                Description
              </label>

              <textarea
                className={cn(
                  "flex h-16 w-full rounded-md border border-[var(--brown)] bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--brown)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                )}
                onChange={(e) => setDescription(e.target.value)}
                id="textAreardss"
                value={description}
              />
            </FormControl>

            <FormControl>
              <label
                htmlFor="ffdg"
                className="font-title text-[var(--brown)] w-200px flex flex-1"
              >
                Sizes
              </label>

              <ReactSelect
                onChange={(v) =>
                  setSizes(((v as IOption[]) ?? []).map((o) => o.value))
                }
                isMulti
                options={AVAILABLE_SIZES.map((s) => ({ value: s, label: s }))}
                value={sizes.map((s) => ({ value: s, label: s }))}
              />
            </FormControl>
          </div>

          <div className="flex gap-3 items-center mt-4">
            <CustomButton type="submit">Create</CustomButton>
          </div>
        </TextureBackground>
      </RowContainer>
    </form>
  );
};
