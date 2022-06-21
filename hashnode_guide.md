# How to publish articles from GitHub

After connecting Hashnode app to your repository, follow these instructions to set up publishing articles from GitHub.

We support markdown files only.

Start by creating a markdown file.

Populate it with the below frontmatter.

Frontmatter: Make sure each article has these details at the top of the file.

## Template

    title: YOUR_TITLE_HERE (Required)

    domain: YOUR_HASHNODE_BLOG_DOMAIN_NAME_HERE (Required) (e.g. sandeep.dev or sandeep.hashnode.dev)

    tags: TAG_SLUG_1, TAG_SLUG_2 (Required) - You can find the list of tags [here](https://github.com/Hashnode/support/blob/main/misc/tags.json)

    subtitle: YOUR_SUBTITLE_HERE

    /\* The pathname of your article url
    - Ex. In https://engineering.hashnode.com/how-we-autodetect-spam-using-googles-vertex-ai
    "how-we-autodetect-spam-using-googles-vertex-ai" is the slug _/
    slug: CUSTOM_ARTICLE_SLUG_HERE (Will be created automatically if not provided)

    /_ You need to upload your image to https://hashnode.com/uploader
    and use the uploaded image URL as COVER_IMAGE_URL _/
    cover: COVER_IMAGE_URL


    /_ When you have a team publication and a publication member has created an article _/
    /_ Please note that this param is only supported while creating an article and not updating _/

    publishAs: USERNAME_OF_AUTHOR_OF_ARTICLE
    /_ When your article is republished and you want to use
    the origin url as canonical url _/

    canonical: CANONICAL_URL_OF_ARTICLE
    /_ Only if you don't want this article to be published yet \*/

    ignorePost: true

    ---

    Enter article body here

Do note that maximum of 10 file changes are respected in one particular commit.

You can also start by cloning our template repository

For more details and logs you can go to View logs.

Your valuable feedback is very much appreciated. Feel free to drop your feedback at feedback.hashnode.com.

If you want to delete a post, you can do so from your publication's dashboard (Articles section).

## To remove GitHub as source

Click on "Uninstall Hashnode App on GitHub" button.

You will have to visit our Github app page, where you can remove repos from the list to revoke access to them.

Uninstalling app via Github will remove it from all the publications that the repo was connected to. If you want to specifically remove the installation from a particular publication, do it from it's Dashboard (Integrations section).
