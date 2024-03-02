import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ContentCardComponent} from "../content-card/content-card.component";
import {FormsModule} from "@angular/forms";
import {TitleCasePipe} from "../title-case.pipe";
import {CreateContentComponent} from "../create-content/create-content.component";
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    ContentCardComponent,
    NgIf,
    FormsModule,
    TitleCasePipe,
    NgStyle,
    NgClass,
    CreateContentComponent,
  ],
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList: Content[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan',
      creator: 'F. Scott Fitzgerald',
      imgURL: 'assets/images/The_Great_Gatsby_Cover.jpg',
      type: 'Novel'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      description: 'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in June 1960 and became instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature; a year after its release, it won the Pulitzer Prize. The plot and characters are loosely based on Lee\'s observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.',
      creator: 'Harper Lee',
      imgURL: 'assets/images/220px-To_Kill_a_Mockingbird_(first_edition_cover).jpg',
      type: 'Novel'
    },
    {
      id: 3,
      title: '1984',
      description: 'Nineteen Eighty-Four (also published as 1984) is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime. Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviours within society.[2][3] Orwell, a democratic socialist, modelled the authoritarian state in the novel on the Soviet Union in the era of Stalinism, and Nazi Germany.[4] More broadly, the novel examines the role of truth and facts within societies and the ways in which they can be manipulated.',
      creator: 'George Orwell',
      imgURL: 'assets/images/1984.jpeg',
      type: 'Dystopian Fiction'
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      description: 'The Catcher in the Rye is a novel by American author J. D. Salinger that was partially published in serial form 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.[4][5] The novel also deals with themes of innocence, identity, belonging, loss, connection, sex, and depression. The main character, Holden Caulfield, has become an icon for teenage rebellion.[6] Caulfield, nearly of age, gives his opinion on a wide variety of topics as he narrates his recent life events.',
      creator: 'J.D. Salinger',
      imgURL: 'assets/images/the red eye.jpeg',
      type: 'Novel'
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      description: 'Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
      creator: 'Jane Austen',
      imgURL: 'assets/images/Pride.jpg',
      type: 'Novel'
    },
    {
      id: 6,
      title: 'The Hobbit',
      description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book is recognized as a classic in children\'s literature and is one of the best-selling books of all time, with over 100 million copies sold.',
      creator: 'J.R.R. Tolkien',
      imgURL: 'assets/images/hobbit.jpg',
      type: 'Fantasy'
    },
    {
      id: 7,
      title: 'The Picture of Dorian Gray',
      description: 'The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott\'s Monthly Magazine. Fearing the story was indecent, the magazine\'s editor deleted roughly five hundred words before publication without Wilde\'s knowledge. Despite that censorship, The Picture of Dorian Gray offended the moral sensibilities of British book reviewers, some of whom said that Oscar Wilde merited prosecution for violating the laws guarding the public morality.',
      creator: 'Oscar Wilde',
      imgURL: 'assets/images/Dorian Gray.jpg',
      type: 'Gothic Fiction'
    },
    {
      id: 8,
      title: 'The Lord of the Rings',
      description: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien\'s 1937 children\'s book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.',
      creator: 'J.R.R. Tolkien',
      imgURL: 'assets/images/rings.jpg',
      type: 'Fantasy'
    },
  ];
  searchTitle: string = '';
  searchResultExists: boolean = false;
  searchResultMessage: string = '';

  constructor() {}
  onContentAdded(newContent: Content) {
    // Handle the reception of the new content item
    console.log('Received new content:', newContent);

    // Display the new item on the ContentList
    this.contentList.push({...newContent});
  }
  deleteContent(index: number) {
    // Remove the content item at the specified index
    this.contentList.splice(index, 1);
  }
  searchContent() {
    const searchTerm = this.searchTitle.toLowerCase();
    const contentExists = this.contentList.some(content => {
      const exists = content.title.toLowerCase() === searchTerm;
      content.highlighted = exists;
      return exists;
    });

    this.searchResultExists = contentExists;
    this.searchResultMessage = contentExists ? 'Content item exists' : 'Content item does not exist';
  }

  ngOnInit(): void {
  }

  uniqueTypes() {
    return Array.from(new Set(this.contentList.map(item => item.type)));

  }
}
